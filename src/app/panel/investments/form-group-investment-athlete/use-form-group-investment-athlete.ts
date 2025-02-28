"use client";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { formSchemaGroupInvestmentAthlete } from "./schema-group-investment-athlete";
import {
  createGroupInvetimentAthlete,
  saveProof,
  updateGroupInvestmentAthlete,
  updateInvestmentProof,
} from "@/app/panel/investments/actions";
import { getFileName } from "./get-file-name-group-investment";
import { UseFormReturn } from "react-hook-form";

const useFormGroupInvestmentAthlete = (
  form: UseFormReturn<z.infer<typeof formSchemaGroupInvestmentAthlete>>
) => {
  const { toast } = useToast();

  const createGroupInvestmentAthleteFn = async (
    values: z.infer<typeof formSchemaGroupInvestmentAthlete>
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

      const createdGroupInvestment = await createGroupInvetimentAthlete(
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
        values.investments.map((id) => ({ id }))
      );

      form.reset({
        investments: [],
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
        title: "Grupo Criado",
        description: "O grupo foi adicionado com sucesso.",
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

  const updateGroupInvestmentAthleteFn = async (
    values: z.infer<typeof formSchemaGroupInvestmentAthlete>,
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

      const updatedGroupInvestment = await updateGroupInvestmentAthlete(
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
        values.investments.map((id) => ({ id }))
      );
      toast({
        title: "Grupo Atualizado",
        description: "O grupo de investimentos foi atualizado com sucesso.",
      });
      return updatedGroupInvestment;
    } catch {
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel atualizar o grupo de investimento. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return {
    createGroupInvestmentAthleteFn,
    updateGroupInvestmentAthleteFn,
  };
};

export default useFormGroupInvestmentAthlete;
