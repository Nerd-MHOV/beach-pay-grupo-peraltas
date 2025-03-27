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
import { Athlete, Investment, InvestmentGroup } from "@prisma/client";
import { Button } from "@/components/ui/button";
import CalendarPickerInput from "@/components/calendarPickerInput";
import { Input } from "@/components/ui/input";
import DialogCreateTournament from "../../tournaments/dialog-create-tournament";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import DialogInvestmentAthlete from "../(single)/dialog-investment-athlete";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { formSchemaGroupInvestmentAthlete } from "./schema-group-investment-athlete";
import { getPaidProofInvestment } from "./get-paid-proof-investment";
import useFormGroupInvestmentAthlete from "./use-form-group-investment-athlete";
import { getAthletes } from "../../athletes/actions";
import { getTournaments } from "../../tournaments/actions";
import { useQuery } from "@tanstack/react-query";
import LoadingData from "@/components/LoadingData";
import ProofFormField from "./fields/proof";
import { createInvestmentAthlete, updateInvestmentAthlete } from "../actions";
import { getInvestmentsType } from "../../investment-types/actions";

const FormGroupInvestmentAthlete = ({
  athlete,
  investmentGroup,
}: {
  athlete?: Athlete;
  investmentGroup?: {
    investments: Investment[];
  } & InvestmentGroup;
}) => {
  const { paid, proof } = getPaidProofInvestment(investmentGroup?.investments);

  const {
    data: athletes = [],
    isPending: isPendingAthletes,
    refetch: refetchAthletes,
  } = useQuery({
    queryKey: ["athletes"],
    queryFn: getAthletes,
  });

  const {
    data: tournaments,
    isPending: isPendingTournaments,
    refetch: refetchTournaments,
  } = useQuery({
    queryKey: ["tournaments"],
    queryFn: getTournaments,
  });

  const form = useForm<z.infer<typeof formSchemaGroupInvestmentAthlete>>({
    resolver: zodResolver(formSchemaGroupInvestmentAthlete),
    defaultValues: {
      ...(athlete ? { athleteId: athlete.id } : {}),
      investments: [],
      total: 0,
      ...(investmentGroup
        ? {
            athleteId: investmentGroup.athleteId,
            investments: investmentGroup.investments.map((inv) => inv.id),
            paid: paid,
            pairId: investmentGroup.pairId,
            pairAmount: investmentGroup.pairAmount ?? undefined,
            podium: investmentGroup.podium ?? "",
            km: investmentGroup.km ?? undefined,
            km_racional: investmentGroup.km_racional ?? undefined,
            description: investmentGroup.description ?? undefined,
            tournamentId: investmentGroup.tournamentId,
            total: investmentGroup.investments.reduce<number>(
              (acc, curr) => acc + curr.value,
              0
            ),
          }
        : {}),
    },
  });

  const upsertFuel = async () => {
    const km = form.getValues().km;
    const km_racional = form.getValues().km_racional;
    const fuelTypeID = (await getInvestmentsType()).find(
      (type) => type.name === "Combustível"
    )?.id;
    const athleteId = form.getValues().athleteId;
    if (!km || !km_racional || !fuelTypeID || !athleteId) return;
    const newValue = km * km_racional;
    const investments = athletes.find(
      (find) => find.id === form.getValues().athleteId
    )?.investments;

    const hasFuelInvestment = investments
      ?.filter((investment) =>
        form.getValues().investments.includes(investment.id)
      )
      .find((inv) => inv.investmentTypeId === fuelTypeID);
    if (hasFuelInvestment) {
      // update
      await updateInvestmentAthlete({
        id: hasFuelInvestment.id,
        athleteId: hasFuelInvestment.athleteId,
        investmentTypeId: hasFuelInvestment.investmentTypeId,
        date: hasFuelInvestment.date,
        description: hasFuelInvestment.description,
        paid: hasFuelInvestment.paid,
        proof: hasFuelInvestment.proof,
        investmentGroupId: hasFuelInvestment.investmentGroupId,
        value: newValue,
      });
      refetchAthletes();
    } else {
      //create

      const created = await createInvestmentAthlete({
        athleteId: athleteId,
        investmentTypeId: fuelTypeID,
        value: newValue,
        date: new Date(),
        description: "Combustível - Gerado por km/km-racional",
        paid: null,
        proof: null,
        investmentGroupId: null,
      });
      await refetchAthletes();
      form.setValue("investments", [
        ...form.getValues().investments,
        created.id,
      ]);
    }
  };

  const { createGroupInvestmentAthleteFn, updateGroupInvestmentAthleteFn } =
    useFormGroupInvestmentAthlete(form);

  const onSubmit = (
    values: z.infer<typeof formSchemaGroupInvestmentAthlete>
  ) => {
    if (investmentGroup) {
      updateGroupInvestmentAthleteFn(values, investmentGroup.id);
      return;
    }
    createGroupInvestmentAthleteFn(values);
  };

  const setTotal = (array: string[]) => {
    const investments = athletes.find(
      (find) => find.id === form.getValues().athleteId
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
                    above={
                      <DialogCreateTournament
                        trigger={
                          <Button size="sm" variant="ghost">
                            <Plus /> Novo Torneio
                          </Button>
                        }
                        onCreateTournament={(tournament) => {
                          refetchTournaments();
                          form.setValue("tournamentId", tournament.id);
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
            name="km_racional"
            render={({ field }) => (
              <FormItem>
                <FormLabel>KM Racional</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Qual o racional?"
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
          name="investments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Investimentos*</FormLabel>
              <FormControl>
                <div className="h-32 rounded-md border overflow-auto py-1">
                  <div className="p-4">
                    {field.value?.map((id, index) => {
                      const investment = athletes
                        .find((find) => find.id === form.getValues().athleteId)
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
                                {investment?.investmentType.name}
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
                              {investmentGroup && (
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
                        .find((find) => find.id === form.getValues().athleteId)
                        ?.investments.filter(
                          (investment) =>
                            !field.value.includes(investment.id) &&
                            investment.investmentGroupId === null
                        )
                        .map((investment) => ({
                          label: `${format(
                            investment.date,
                            "dd/MM/yy"
                          )} - ${investment.value.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })} - ${investment.investmentType.name}`,
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
                          console.log("created", investment);
                          refetchAthletes();
                          form.setValue("investments", [
                            ...form.getValues().investments,
                            investment.id,
                          ]);
                        }}
                        athlete={athletes.find(
                          (find) => find.id === form.getValues().athleteId
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
        <div className="flex w-full justify-end mt-5">
          <Button
            isLoading={form.formState.isSubmitting}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {investmentGroup ? "Atualizar" : "Investir"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormGroupInvestmentAthlete;
