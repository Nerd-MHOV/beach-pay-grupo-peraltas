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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Member, Investment, InvestmentTournament } from "@prisma/client";
import { Button } from "@/components/ui/button";
import CalendarPickerInput from "@/components/calendarPickerInput";
import { Input } from "@/components/ui/input";
import DialogCreateTournament from "../../tournaments/dialog-create-tournament";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import DialogInvestmentAthlete from "../(single)/dialog-investment-athlete";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { formSchemaInvestmentTournament } from "./schema-investment-tournament";
import { getPaidProofInvestment } from "./get-paid-proof-investment";
import useFormInvestmentTournament from "./use-form-investment-tournament";
import { getMembers } from "@/app/(root)/panel/members/actions";
import { getTournaments } from "../../tournaments/actions";
import { useQuery } from "@tanstack/react-query";
import { createInvestmentAthlete, updateInvestmentAthlete } from "../actions";
import { getInvestmentsType } from "../../investment-types/actions";
import DialogDeleteInvestmentTournament from "./dialog-delete-investment-tournament";
import LoadingData from "@/components/LoadingData";
import ProofFormField from "./fields/proof";

const FormInvestmentTournament = ({
  athlete,
  investmentTournament,
}: {
  athlete?: Member;
  investmentTournament?: {
    investments: Investment[];
  } & InvestmentTournament;
}) => {
  const { paid, proof } = getPaidProofInvestment(
    investmentTournament?.investments
  );

  const {
    data: athletes = [],
    isPending: isPendingAthletes,
    refetch: refetchAthletes,
  } = useQuery({
    queryKey: ["members"],
    queryFn: async () => await getMembers(),
  });

  const {
    data: tournaments,
    isPending: isPendingTournaments,
    refetch: refetchTournaments,
  } = useQuery({
    queryKey: ["tournaments"],
    queryFn: getTournaments,
  });

  const form = useForm<z.infer<typeof formSchemaInvestmentTournament>>({
    resolver: zodResolver(formSchemaInvestmentTournament),
    defaultValues: {
      ...(athlete ? { athlete_id: athlete.id } : {}),
      investments: [],
      total: 0,
      ...(investmentTournament
        ? {
            athlete_id: investmentTournament.athlete_id,
            investments: investmentTournament.investments.map((inv) => inv.id),
            paid: paid,
            pair_id: investmentTournament.pair_id,
            pair_amount: investmentTournament.pair_amount ?? undefined,
            podium: investmentTournament.podium ?? "",
            km: investmentTournament.km ?? undefined,
            description: investmentTournament.description ?? undefined,
            tournament_id: investmentTournament.tournament_id,
            total: investmentTournament.investments.reduce<number>(
              (acc, curr) => acc + curr.value,
              0
            ),
          }
        : {}),
    },
  });

  const upsertFuel = async () => {
    const km = form.getValues().km;
    //TODO: km_racional is not created yet;
    const km_racional = 0.6;
    const fuelTypeID = (await getInvestmentsType()).find(
      (type) => type.name === "Combustível"
    )?.id;
    const athlete_id = form.getValues().athlete_id;
    if (!km || !km_racional || !fuelTypeID || !athlete_id) return;
    const newValue = km * km_racional;
    const investments = athletes.find(
      (find) => find.id === form.getValues().athlete_id
    )?.investments;

    const hasFuelInvestment = investments
      ?.filter((investment) =>
        form.getValues().investments.includes(investment.id)
      )
      .find((inv) => inv.investment_type_id === fuelTypeID);
    if (hasFuelInvestment) {
      // update
      await updateInvestmentAthlete({
        id: hasFuelInvestment.id,
        athlete_id: hasFuelInvestment.athlete_id,
        investment_type_id: hasFuelInvestment.investment_type_id,
        date: new Date(hasFuelInvestment.date),
        description: hasFuelInvestment.description,
        paid: hasFuelInvestment.paid ? new Date(hasFuelInvestment.paid) : null,
        proof: hasFuelInvestment.proof,
        investment_tournament_id: hasFuelInvestment.investment_tournament_id,
        value: newValue,
      });
      refetchAthletes();
    } else {
      //create

      const created = await createInvestmentAthlete({
        athlete_id: athlete_id,
        investment_type_id: fuelTypeID,
        value: newValue,
        date: new Date(),
        description: "Combustível - Gerado por km/km-racional",
        paid: null,
        proof: null,
        investment_tournament_id: null,
      });
      await refetchAthletes();
      form.setValue("investments", [
        ...form.getValues().investments,
        created.id,
      ]);
    }
  };

  const { createGroupInvestmentAthleteFn, updateGroupInvestmentAthleteFn } =
    useFormInvestmentTournament(form);

  const onSubmit = (values: z.infer<typeof formSchemaInvestmentTournament>) => {
    if (investmentTournament) {
      updateGroupInvestmentAthleteFn(values, investmentTournament.id);
      return;
    }
    createGroupInvestmentAthleteFn(values);
  };

  const setTotal = (array: string[]) => {
    const investments = athletes.find(
      (find) => find.id === form.getValues().athlete_id
    )?.investments;

    if (!investments) return;
    form.setValue(
      "total",
      array.reduce<number>((acc, id) => {
        const investment = investments.find((find) => find.id === id);
        if (!investment) return acc;
        return acc + investment.value;
      }, 0)
    );
  };

  if (isPendingAthletes || isPendingTournaments) {
    return <LoadingData />;
  }

  return (
    <Form {...form}>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.stopPropagation();
          form.handleSubmit(onSubmit)(e);
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="athlete_id"
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
                    onSelect={(value) => {
                      form.resetField("investments");
                      form.setValue("total", 0);
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pair_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dupla</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder="Selecione a dupla"
                    items={
                      athletes
                        ?.filter(
                          (athlete) =>
                            athlete.id !== form.getValues().athlete_id
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
            name="tournament_id"
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
                    above={
                      <DialogCreateTournament
                        trigger={
                          <Button size="sm" variant="ghost">
                            <Plus /> Novo Torneio
                          </Button>
                        }
                        onCreateTournament={(tournament) => {
                          refetchTournaments();
                          form.setValue("tournament_id", tournament.id);
                        }}
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
            name="pair_amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qnt. Duplas na Categoria</FormLabel>
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
              <FormLabel>Colocação</FormLabel>
              <FormControl>
                <Combobox
                  placeholder="Selecione a colocação"
                  items={[
                    { label: "1º Lugar", value: "1º Lugar" },
                    { label: "2º Lugar", value: "2º Lugar" },
                    { label: "3º Lugar", value: "3º Lugar" },
                    { label: "4º Lugar", value: "4º Lugar" },
                    { label: "Quartas de Final", value: "Quartas de Final" },
                    { label: "Oitavas de Final", value: "Oitavas de Final" },
                    { label: "Fase de Grupo", value: "Fase de Grupo" },
                  ]}
                  selected={field.value}
                  onSelect={(value) => {
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                  onChange={(e) => {
                    field.onChange(Number(e.target.value));
                    upsertFuel();
                  }}
                  value={Number(field.value) ?? 0}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
          name="investments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Investimentos*</FormLabel>
              <FormControl>
                <div className="h-32 rounded-md border overflow-auto py-1">
                  <div className="p-4">
                    {field.value?.map((id, index) => {
                      const investment = athletes
                        .find((find) => find.id === form.getValues().athlete_id)
                        ?.investments.find((find) => find.id === id);
                      if (!investment) return null;
                      return (
                        <div key={index}>
                          <div className="text-sm flex justify-between gap-2 items-center">
                            <div className="relative flex flex-col flex-1">
                              <p className="text-xs absolute top-2 right-2">
                                {format(investment.date, "dd/MM/yy")}
                              </p>
                              <h1 className="font-bold">
                                {investment?.investment_type.name}
                              </h1>
                              <h2 className="text-xs font-semibold">
                                +
                                {investment.value.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </h2>
                              <p className="text-xs mt-2 text-gray-500">
                                {investment.description}
                              </p>
                            </div>
                            <div className="flex flex-col gap-1">
                              {investmentTournament && (
                                <DialogInvestmentAthlete
                                  investment={investment}
                                  trigger={
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      type="button"
                                    >
                                      Editar
                                    </Button>
                                  }
                                />
                              )}
                              <Button
                                size="sm"
                                variant="outline"
                                type="button"
                                className="bg-red-100 text-red-800"
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
                          </div>
                          <Separator className="my-2" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="investments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adicionar Investimento*</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder="Selecione o Investimento"
                    items={
                      athletes
                        .find((find) => find.id === form.getValues().athlete_id)
                        ?.investments.filter(
                          (investment) =>
                            !field.value.includes(investment.id) &&
                            investment.investment_tournament_id === null
                        )
                        .map((investment) => ({
                          label: `${format(
                            investment.date,
                            "dd/MM/yy"
                          )} - ${investment.value.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })} - ${investment.investment_type.name}`,
                          value: investment.id,
                        })) || []
                    }
                    selected={""}
                    onSelect={(value) => {
                      field.onChange([...field.value, value]);
                      setTotal([...field.value, value]);
                    }}
                    above={
                      <DialogInvestmentAthlete
                        onCreateInvestment={(investment: Investment) => {
                          refetchAthletes();
                          form.setValue("investments", [
                            ...form.getValues().investments,
                            investment.id,
                          ]);
                        }}
                        athlete={athletes.find(
                          (find) => find.id === form.getValues().athlete_id
                        )}
                        trigger={
                          <Button size="sm" variant="ghost">
                            <Plus /> Novo Investimento
                          </Button>
                        }
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
                <FormLabel>Total</FormLabel>
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

          <ProofFormField form={form} proof={proof} />
        </div>
        <div className="flex w-full gap-4 justify-end mt-5">
          {investmentTournament && (
            <DialogDeleteInvestmentTournament
              investment={investmentTournament}
            />
          )}
          <Button
            isLoading={form.formState.isSubmitting}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {investmentTournament ? "Atualizar" : "Investir"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormInvestmentTournament;
