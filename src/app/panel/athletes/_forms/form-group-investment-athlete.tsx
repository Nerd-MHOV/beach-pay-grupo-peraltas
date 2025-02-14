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
import { Athlete } from "@prisma/client";
import { Button } from "@/components/ui/button";
import CalendarPickerInput from "@/components/calendarPickerInput";
import { Input } from "@/components/ui/input";
import {
  createGroupInvetimentAthlete,
  getAthletes,
  saveProof,
  updateInvestimentProof,
} from "../actions";
import DialogCreateTournament from "../../tournaments/dialog-create-tournament";
import { getTournaments } from "../../tournaments/actions";
import { Textarea } from "@/components/ui/textarea";
import { getInvestiments } from "../../investiments/actions";
import { format } from "date-fns";
import DialogInvestmentAthlete from "../_dialogs/dialog-investment-athlete";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  athleteId: z.string().min(2).max(255),
  tournamentId: z
    .string()
    .min(2)
    .max(255)
    .optional()
    .nullable()
    .transform((v) => v ?? null),
  pairId: z
    .string()
    .min(2)
    .max(255)
    .optional()
    .nullable()
    .transform((v) => v ?? null),
  investiments: z.array(z.string().min(2).max(255)),
  podium: z
    .string()
    .min(2)
    .max(255)
    .optional()
    .nullable()
    .transform((v) => v ?? ""),
  description: z
    .string()
    .min(0)
    .max(255)
    .optional()
    .nullable()
    .transform((v) => v ?? ""),
  pairAmount: z
    .number()
    .optional()
    .nullable()
    .transform((v) => v ?? NaN),
  km: z
    .number()
    .optional()
    .nullable()
    .transform((v) => v ?? NaN),
  km_racional: z
    .number()
    .optional()
    .nullable()
    .transform((v) => v ?? NaN),
  paid: z
    .date()
    .optional()
    .nullable()
    .transform((v) => v ?? null),
  total: z
    .number()
    .optional()
    .nullable()
    .transform((v) => v ?? 0),
  proof: z
    .instanceof(File, {
      message: "O arquivo deve ser uma imagem ou PDF.",
    })
    .refine(
      (file) =>
        ["aplication/pdf", "image/png", "image/jpeg", "image/jpg"].includes(
          file.type
        ),
      { message: "O arquivo deve ser uma imagem ou PDF." }
    )
    .optional()
    .nullable()
    .transform((v) => v ?? null),
});

const FormGroupInvestmentAthlete = ({ athlete }: { athlete?: Athlete }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: athletes } = useQuery({
    queryKey: ["athletes"],
    queryFn: getAthletes,
  });

  const { data: tournaments } = useQuery({
    queryKey: ["tournaments"],
    queryFn: getTournaments,
  });

  const { data: investiments = [] } = useQuery({
    queryKey: ["investiments"],
    queryFn: async () => {
      return await getInvestiments(form.getValues().athleteId);
    },
  });

  const { mutateAsync: createInvestmentAthleteFn, isPending } = useMutation({
    mutationKey: ["create-investment-athlete"],
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      let file: string | null = null;
      if (values.proof) {
        const fileExtension = values.proof.name.split(".").pop();
        const filePath = await saveProof(
          values.proof,
          `investments-${values.athleteId}-group-${format(
            new Date(),
            "dd-mm-yy"
          )}.${fileExtension}`
        );
        file = filePath;
      }

      if (values.proof || values.paid) {
        await updateInvestimentProof(
          values.investiments.map((id) => ({ id })),
          {
            file,
            date: values.paid,
          }
        );
      }

      return await createGroupInvetimentAthlete(
        {
          athleteId: values.athleteId,
          pairId: values.pairId,
          description: values.description,
          km: values.km,
          km_racional: values.km_racional,
          pairAmount: values.pairAmount,
          podium: values.podium,
          tournamentId: values.tournamentId,
        },
        values.investiments.map((id) => ({ id }))
      );
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
      queryClient.setQueryData(["investment-athletes"], (old: undefined) => [
        ...(old || []),
        data,
      ]);
      // form.reset();
      toast({
        title: "Investimento Adicionado",
        description: "O investimento foi adicionado com sucesso.",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createInvestmentAthleteFn(values);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...(athlete ? { athleteId: athlete.id } : {}),
      investiments: [],
      total: 0,
    },
  });

  const setTotal = (array: string[]) => {
    form.setValue(
      "total",
      array.reduce<number>((acc, id) => {
        const investiment = investiments.find((find) => find.id === id);
        if (!investiment) return acc;
        return acc + investiment.value;
      }, 0)
    );
  };
  return (
    <Form {...form}>
      <form className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="athleteId"
            render={({ field }) => (
              <FormItem>
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
                        : athletes?.map((athlete) => ({
                            label: athlete.name,
                            value: athlete.id,
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
            name="pairId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dupla</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder="Selecione a dupla"
                    items={
                      athletes
                        ?.filter(
                          (athlete) => athlete.id !== form.getValues().athleteId
                        )
                        .map((athlete) => ({
                          label: athlete.name,
                          value: athlete.id,
                        })) || []
                    }
                    selected={field.value || ""}
                    onSelect={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="tournamentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Torneio</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder="Selecione o Torneio"
                    items={
                      tournaments?.map((athlete) => ({
                        label: athlete.name,
                        value: athlete.id,
                      })) || []
                    }
                    selected={field.value || ""}
                    onSelect={(value) => field.onChange(value)}
                    above={<DialogCreateTournament combobox />}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pairAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qnt. Duplas</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="quantas duplas?"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    value={Number(field.value) ?? 0}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="podium"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pódio</FormLabel>
              <FormControl>
                <Input placeholder="Colocação..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="km"
            render={({ field }) => (
              <FormItem>
                <FormLabel>KM</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Quantos KM?"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    value={Number(field.value) ?? 0}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="km_racional"
            render={({ field }) => (
              <FormItem>
                <FormLabel>KM Racional</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Qual o racional?"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    value={Number(field.value) ?? 0}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea placeholder="Descrição do Investimento" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="investiments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Investimentos*</FormLabel>
              <FormControl>
                <ScrollArea className="h-32 rounded-md border">
                  <div className="p-4">
                    {field.value?.map((id, index) => {
                      const investiment = investiments?.find(
                        (find) => find.id === id
                      );
                      if (!investiment) return null;
                      return (
                        <>
                          <div
                            key={index}
                            className="text-sm flex justify-between gap-2 items-center"
                          >
                            <div className="relative flex flex-col flex-1">
                              <p className="text-xs absolute top-2 right-2">
                                {format(investiment.date, "dd/MM/yy")}
                              </p>
                              <h1 className="font-bold">
                                {investiment?.investimentType.name}
                              </h1>
                              <h2 className="text-xs font-semibold">
                                +
                                {investiment.value.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </h2>
                              <p className="text-xs mt-2 text-gray-500">
                                {investiment.description}
                              </p>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              type="button"
                              onClick={() => {
                                const array = field.value?.filter(
                                  (_, i) => i !== index
                                );
                                field.onChange(array);
                                setTotal(array);
                              }}
                            >
                              Remover
                            </Button>
                          </div>
                          <Separator className="my-2" />
                        </>
                      );
                    })}
                  </div>
                </ScrollArea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="investiments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adicionar Investimento*</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder="Selecione o Investimento"
                    items={
                      investiments?.map((investiment) => ({
                        label: `${format(
                          investiment.date,
                          "dd/MM/yy"
                        )} - ${investiment.value.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })} - ${investiment.investimentType.name}`,
                        value: investiment.id,
                      })) || []
                    }
                    selected={""}
                    onSelect={(value) => {
                      field.onChange([...field.value, value]);
                      setTotal([...field.value, value]);
                    }}
                    above={
                      <DialogInvestmentAthlete
                        combobox
                        athlete={athlete}
                        clean
                      />
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="total"
            render={({ field }) => (
              <FormItem className="pointer-events-none">
                <FormLabel>Comprovante</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                    disabled
                    className="pointer-events-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <CalendarPickerInput form={form} name="paid" label="Pago em:" />

          <FormField
            control={form.control}
            name="proof"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comprovante</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) =>
                      field.onChange(e.target.files?.[0] || null)
                    }
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full justify-end mt-5">
          <Button isLoading={isPending} onClick={form.handleSubmit(onSubmit)}>
            Investir
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormGroupInvestmentAthlete;
