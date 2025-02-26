"use client";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { formSchemaGroupInvestimentAthlete } from "./schema-group-investiment-athlete";
import {
  createGroupInvetimentAthlete,
  saveProof,
  updateGroupInvestimentAthlete,
  updateInvestimentProof,
} from "@/app/panel/investiments/actions";
import { getFileName } from "./get-file-name-group-investiment";
import { UseFormReturn } from "react-hook-form";

const useFormGroupInvestimentAthlete = (
  form: UseFormReturn<z.infer<typeof formSchemaGroupInvestimentAthlete>>
) => {
  const { toast } = useToast();

  const createGroupInvestmentAthleteFn = async (
    values: z.infer<typeof formSchemaGroupInvestimentAthlete>
  ) => {
    try {
      let file: string | null = null;
      if (values.proof) {
        const filePath = await saveProof(values.proof, getFileName(values));
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

      const createdGroupInvestiment = await createGroupInvetimentAthlete(
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

      form.reset({
        investiments: [],
        total: 0,
        description: "",
        km: 0,
        km_racional: 0,
        paid: null,
        proof: null,
        podium: "",
        pairAmount: 0,
        pairId: null,
      });
      toast({
        title: "Investimento Adicionado",
        description: "O investimento foi adicionado com sucesso.",
      });
      return createdGroupInvestiment;
    } catch {
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel adicionar o investimento. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const updateGroupInvestimentAthleteFn = async (
    values: z.infer<typeof formSchemaGroupInvestimentAthlete>,
    id: string
  ) => {
    try {
      let file: string | null = null;
      if (values.proof) {
        const filePath = await saveProof(values.proof, getFileName(values));
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

      const updatedGroupInvestiment = await updateGroupInvestimentAthlete(
        {
          id: id || "",
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
      toast({
        title: "Investimento Atualizado",
        description: "O investimento foi atualizado com sucesso.",
      });
      return updatedGroupInvestiment;
    } catch {
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel atualizar o investimento. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return {
    createGroupInvestmentAthleteFn,
    updateGroupInvestimentAthleteFn,
  };
};

export default useFormGroupInvestimentAthlete;
