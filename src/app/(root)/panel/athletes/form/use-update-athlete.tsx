"use client";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { updateAthlete } from "../actions";
import { Address, Athlete } from "@prisma/client";

const useUpdateAthlete = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const updateAthleteFn = async (
    data: Omit<
      Athlete & {
        address: Omit<Address, "created_at" | "updated_at">;
        teacher_user_id?: string | null;
      },
      "created_at" | "updated_at" | "address_id"
    >
  ) => {
    try {
      const updatedAthlete = await updateAthlete(data);
      queryClient.invalidateQueries({ queryKey: ["athletes"] });
      toast({
        title: `Atleta ${updatedAthlete.name} Atualizado`,
        description: "O atleta foi atualizado com sucesso.",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel atualizar o atleta. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return {
    updateAthlete: updateAthleteFn,
  };
};

export default useUpdateAthlete;
