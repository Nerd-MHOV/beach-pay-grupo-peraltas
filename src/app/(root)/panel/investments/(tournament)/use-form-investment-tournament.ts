"use client";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { formSchemaInvestmentTournament } from "./schema-investment-tournament";
import {
  createInvestmentTournamentAthlete,
  saveProof,
  updateInvestmentTournament,
  updateInvestmentProof,
} from "@/app/(root)/panel/investments/actions";
import { getFileName } from "./get-file-name-investment-tournament";
import { UseFormReturn } from "react-hook-form";

const useFormInvestmentTournament = (
  form: UseFormReturn<z.infer<typeof formSchemaInvestmentTournament>>
) => {
  const { toast } = useToast();

  const createInvestmentTournamentFn = async (
    values: z.infer<typeof formSchemaInvestmentTournament>
  ) => {
    try {
      let file: string | null = null;
      if (values.proof) {
        const filePath = await saveProof(values.proof, getFileName(values));
        file = filePath;
      }

      if (values.proof || values.paid) {
        await updateInvestmentProof(
          values.investments.map((id) => ({ id })),
          {
            file,
            date: values.paid,
          }
        );
      }

      const createdGroupInvestment = await createInvestmentTournamentAthlete(
        {
          athlete_id: values.athlete_id,
          pair_id: values.pair_id,
          description: values.description,
          km: values.km,
          pair_amount: values.pair_amount,
          podium: values.podium,
          tournament_id: values.tournament_id,
        },
        values.investments.map((id) => ({ id }))
      );

      form.reset({
        investments: [],
        total: 0,
        description: "",
        km: 0,
        paid: null,
        proof: null,
        podium: "",
        pair_amount: 0,
        pair_id: null,
      });
      toast({
        title: "Investimentos vinculados ao Torneio",
        description: "Os investimentos no atleta foram vinculados ao torneio.",
      });
      return createdGroupInvestment;
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel criar o grupo. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const updateInvestmentTournamentFn = async (
    values: z.infer<typeof formSchemaInvestmentTournament>,
    id: string
  ) => {
    try {
      let file: string | null = null;
      if (values.proof) {
        const filePath = await saveProof(values.proof, getFileName(values));
        file = filePath;
      }

      if (values.proof || values.paid) {
        await updateInvestmentProof(
          values.investments.map((id) => ({ id })),
          {
            file,
            date: values.paid,
          }
        );
      }

      const updatedInvestmentTournament = await updateInvestmentTournament(
        {
          id: id || "",
          athlete_id: values.athlete_id,
          pair_id: values.pair_id,
          description: values.description,
          km: values.km,
          pair_amount: values.pair_amount,
          podium: values.podium,
          tournament_id: values.tournament_id,
        },
        values.investments.map((id) => ({ id }))
      );
      toast({
        title: "Investimentos Atualizados",
        description: "Os investimentos foram atualizados com sucesso.",
      });
      return updatedInvestmentTournament;
    } catch {
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel atualizar os investimentos do torneio. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return {
    createGroupInvestmentAthleteFn: createInvestmentTournamentFn,
    updateGroupInvestmentAthleteFn: updateInvestmentTournamentFn,
  };
};

export default useFormInvestmentTournament;
