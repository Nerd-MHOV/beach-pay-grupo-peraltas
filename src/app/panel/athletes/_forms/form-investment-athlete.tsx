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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getInvestimentsType } from "../../investiment-types/actions";
import DialogCreateInvestimentType from "../../investiment-types/dialog-create-investiment-type";
import {
  createInvestmentAthlete,
  getAthletes,
  saveProof,
  updateInvestimentAthlete,
} from "../actions";
import { Athlete, Investiment, InvestimentType } from "@prisma/client";
import MoneyInput from "@/components/moneyInput";
import { Button } from "@/components/ui/button";
import CalendarPickerInput from "@/components/calendarPickerInput";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import { CircleX, Plus } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  investimentTypeId: z.string().min(2).max(255),
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
  return `investments-${values.athleteId}-${values.investimentTypeId}-${format(
    new Date(),
    "dd-mm-yy"
  )}.${fileExtension}`;
};

const FormInvestmentAthlete = ({
  athlete,
  investiment,
  clean = false,
}: {
  investiment?: {
    athlete: Athlete;
  } & Investiment;
  athlete?: Athlete;
  clean?: boolean;
}) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [investimentProof, setInvestimentProof] = useState<string | null>(
    investiment?.proof || null
  );

  const { data: investmentTypes } = useQuery({
    queryKey: ["investiment-types"],
    queryFn: getInvestimentsType,
  });

  const { data: athletes } = useQuery({
    queryKey: ["athletes"],
    queryFn: getAthletes,
  });
  const { mutateAsync: createInvestmentAthleteFn, isPending } = useMutation({
    mutationKey: ["create-investment-athlete"],
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      let file: string | null = null;
      if (values.proof) {
        const filePath = await saveProof(values.proof, getFileName(values));

        file = filePath;
      }
      return await createInvestmentAthlete({
        ...values,
        proof: file,
        investimentGroupId: null,
        ...(athlete ? { athleteId: athlete.id } : {}),
      });
    },
    onError: () => {
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel adicionar o investimento. Tente novamente.",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["investment-athletes", "investiments", "investiment-list-athlete"],
        (old: undefined) => [
          ...(old || []),
          {
            ...data,
            new: true,
          },
        ]
      );
      form.reset({
        description: "",
        investimentTypeId: "",
        value: 0,
        paid: null,
        proof: null,
      });
      toast({
        title: "Investimento Adicionado",
        description: "O investimento foi adicionado com sucesso.",
      });
    },
  });

  const { mutateAsync: updateInvestmentAthleteFn, isPending: isPendingUpdate } =
    useMutation({
      mutationKey: ["update-investment-athlete"],
      mutationFn: async (values: z.infer<typeof formSchema>) => {
        let file: string | null = null;
        if (values.proof) {
          const filePath = await saveProof(values.proof, getFileName(values));

          file = filePath;
        }
        return await updateInvestimentAthlete({
          id: investiment?.id || "",
          ...values,
          proof: file,
          investimentGroupId: null,
        });
      },
      onError: () => {
        toast({
          title: "Algo de Errado",
          description:
            "Não foi possivel atualizar o investimento. Tente novamente.",
          variant: "destructive",
        });
      },
      onSuccess: (data) => {
        queryClient.setQueryData(
          ["investment-athletes", "investiments", "investiment-list-athlete"],
          (old: ({ investimentType: InvestimentType } & Investiment)[]) =>
            (old || []).map((invt) => {
              if (invt?.id === data.id) {
                return {
                  ...data,
                  new: true,
                };
              }
              return invt;
            })
        );
        toast({
          title: "Investimento Atualizado",
          description: "O investimento foi atualizado com sucesso.",
        });
      },
    });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (investiment) {
      updateInvestmentAthleteFn(values);
      return;
    }
    createInvestmentAthleteFn(values);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...(athlete ? { athleteId: athlete.id } : {}),
      ...(investiment
        ? {
            athleteId: investiment.athleteId,
            investimentTypeId: investiment.investimentTypeId,
            value: investiment.value,
            date: investiment.date,
            description: investiment.description,
            paid: investiment.paid,
          }
        : {}),
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-3">
        <FormField
          control={form.control}
          name="athleteId"
          render={({ field }) => (
            <FormItem
              className={cn({
                hidden: clean,
              })}
            >
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
          name="investimentTypeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Investimento*</FormLabel>
              <FormControl>
                <Combobox
                  placeholder="Selecione o Tipo de Investimento"
                  items={(investmentTypes || []).map((investiment) => ({
                    label: investiment.name,
                    value: investiment.id,
                  }))}
                  selected={field.value}
                  onSelect={(value) => field.onChange(value)}
                  above={
                    <DialogCreateInvestimentType
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
                  {investimentProof && investiment?.proof ? (
                    <div className="relative ">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => {
                          setInvestimentProof(null);
                        }}
                        className="absolute top-0 right-0 "
                      >
                        <CircleX className="text-red-600" />
                      </Button>

                      <Image
                        onClick={() => {
                          const url = `${window.location.origin}${investiment?.proof}`;
                          window.open(url, "_blank");
                        }}
                        src={investiment?.proof}
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
          <Button
            isLoading={isPending || isPendingUpdate}
            onClick={form.handleSubmit(onSubmit)}
          >
            {investiment ? "Atualizar" : "Investir"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormInvestmentAthlete;
