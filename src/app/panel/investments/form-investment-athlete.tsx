"use client";

import { Combobox } from "@/components/combobox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getInvestmentsType } from "../investment-types/actions";
import DialogCreateInvestmentType from "../investment-types/dialog-create-investment-type";
import { getAthletes } from "../athletes/actions";
import { Athlete, Investment, InvestmentType } from "@prisma/client";
import MoneyInput from "@/components/moneyInput";
import { Button } from "@/components/ui/button";
import CalendarPickerInput from "@/components/calendarPickerInput";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import { CircleX, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import {
  createInvestmentAthlete,
  saveProof,
  updateInvestmentAthlete,
} from "./actions";

const formSchema = z.object({
  investmentTypeId: z.string().min(2).max(255),
  athleteId: z.string().min(2).max(255),
  value: z.number(),
  date: z.date(),
  description: z.string().min(5).max(255),
  paid: z
    .date()
    .optional()
    .nullable()
    .transform((v) => v ?? null),
  proof: z
    .instanceof(File, {
      message: "O arquivo deve ser uma imagem ou PDF.",
    })
    .refine(
      (file) =>
        ["application/pdf", "image/png", "image/jpeg", "image/jpg"].includes(
          file.type
        ),
      { message: "O arquivo deve ser uma imagem ou PDF." }
    )
    .optional()
    .nullable()
    .transform((v) => v ?? null),
});

const getFileName = (values: z.infer<typeof formSchema>) => {
  if (!values.proof) return "";
  const fileExtension = values.proof.name.split(".").pop();
  return `investments-${values.athleteId}-${values.investmentTypeId}-${format(
    new Date(),
    "dd-mm-yy"
  )}.${fileExtension}`;
};

const FormInvestmentAthlete = ({
  athlete,
  investment,
  clean = false,
  onCreateInvestment,
}: {
  onCreateInvestment?: (investment: Investment) => void;
  investment?: Investment;
  athlete?: Athlete;
  clean?: boolean;
}) => {
  const { toast } = useToast();
  const [investmentProof, setInvestmentProof] = useState<string | null>(
    investment?.proof || null
  );

  const [athletes, setAtheltes] = useState<Athlete[]>([]);
  const [investmentTypes, setInvestmentTypes] = useState<InvestmentType[]>([]);

  const createInvestmentAthleteFn = async (
    values: z.infer<typeof formSchema>
  ) => {
    try {
      let file: string | null = null;
      if (values.proof) {
        const filePath = await saveProof(values.proof, getFileName(values));

        file = filePath;
      }
      const created = await createInvestmentAthlete({
        ...values,
        proof: file,
        investmentGroupId: null,
        ...(athlete ? { athleteId: athlete.id } : {}),
      });
      onCreateInvestment?.(created);
      form.reset({
        description: "",
        investmentTypeId: "",
        value: 0,
        paid: null,
        proof: null,
      });
      toast({
        title: "Investimento Adicionado",
        description: "O investimento foi adicionado com sucesso.",
      });
      return created;
    } catch {
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel adicionar o investimento. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const updateInvestmentAthleteFn = async (
    values: z.infer<typeof formSchema>
  ) => {
    try {
      let file: string | null = null;
      if (values.proof) {
        const filePath = await saveProof(values.proof, getFileName(values));

        file = filePath;
      }
      const updated = await updateInvestmentAthlete({
        id: investment?.id || "",
        ...values,
        proof: file,
        investmentGroupId: null,
      });
      toast({
        title: "Investimento Atualizado",
        description: "O investimento foi atualizado com sucesso.",
      });
      return updated;
    } catch {
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel atualizar o investimento. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (investment) {
      await updateInvestmentAthleteFn(values);
      return;
    }
    await createInvestmentAthleteFn(values);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...(athlete ? { athleteId: athlete.id } : {}),
      ...(investment
        ? {
            athleteId: investment.athleteId,
            investmentTypeId: investment.investmentTypeId,
            value: investment.value,
            date: investment.date,
            description: investment.description,
            paid: investment.paid,
          }
        : {}),
    },
  });

  useEffect(() => {
    async function fetch() {
      const fetchAthletes = await getAthletes();
      const fetchInvestmentTypes = await getInvestmentsType();
      setAtheltes(fetchAthletes);
      setInvestmentTypes(fetchInvestmentTypes);
    }

    fetch();
  }, []);

  return (
    <Form {...form}>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.stopPropagation();
          form.handleSubmit(onSubmit)(e);
        }}
      >
        <FormField
          control={form.control}
          name="athleteId"
          render={({ field }) => (
            <FormItem className={cn({})}>
              <FormLabel>Atleta*</FormLabel>
              <FormControl>
                <Combobox
                  placeholder="Selecione o Atleta"
                  disabled={!!athlete}
                  items={
                    athlete
                      ? [
                          {
                            label: athlete.name,
                            value: athlete.id,
                          },
                        ]
                      : athletes?.map((ath) => ({
                          label: ath.name,
                          value: ath.id,
                        })) || []
                  }
                  selected={field.value}
                  onSelect={(value) => field.onChange(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="investmentTypeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Investimento*</FormLabel>
              <FormControl>
                <Combobox
                  placeholder="Selecione o Tipo de Investimento"
                  items={(investmentTypes || []).map((investment) => ({
                    label: investment.name,
                    value: investment.id,
                  }))}
                  selected={field.value}
                  onSelect={(value) => field.onChange(value)}
                  above={
                    <DialogCreateInvestmentType
                      trigger={
                        <Button size="sm" variant="ghost">
                          <Plus /> Novo Tipo de Investimento
                        </Button>
                      }
                    />
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <MoneyInput
            form={form}
            name="value"
            label="Valor*"
            placeholder="Valor do Investimento"
          />

          <CalendarPickerInput
            form={form}
            name="date"
            label="Data do Investimento*"
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição*</FormLabel>
              <FormControl>
                <Textarea placeholder="Descrição do Investimento" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div
          className={cn("grid grid-cols-2 gap-4", {
            hidden: clean,
          })}
        >
          <CalendarPickerInput form={form} name="paid" label="Pago em:" />

          <FormField
            control={form.control}
            name="proof"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comprovante</FormLabel>
                <FormControl>
                  {investmentProof && investment?.proof ? (
                    <div className="relative ">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => {
                          setInvestmentProof(null);
                        }}
                        className="absolute top-0 right-0 "
                      >
                        <CircleX className="text-red-600" />
                      </Button>

                      <Image
                        onClick={() => {
                          const url = `${window.location.origin}${investment?.proof}`;
                          window.open(url, "_blank");
                        }}
                        src={investment?.proof}
                        width={200}
                        height={200}
                        objectFit="cover"
                        alt="proof"
                      />
                    </div>
                  ) : (
                    <Input
                      type="file"
                      onChange={(e) => {
                        field.onChange(e.target.files?.[0] || null);
                        if (form.getValues().paid === null)
                          form.setValue("paid", new Date());
                      }}
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex w-full justify-end mt-5">
          <Button isLoading={form.formState.isSubmitting}>
            {investment ? "Atualizar" : "Investir"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormInvestmentAthlete;
