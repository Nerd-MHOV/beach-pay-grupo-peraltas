"use client";

import { Address, Athlete } from "@prisma/client";
import { createAthlete } from "../actions";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

const useCreateAthlete = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const createAthleteFn = async (
    data: Omit<Athlete & {
      address: Omit<Address, "id" | "created_at" | "updated_at">,
      teacher_user_id?: string | null,
    }, "id" | "created_at" | "updated_at" | "address_id">
  ) => {
    try {
      const { name } = await createAthlete(data);
      queryClient.invalidateQueries({ queryKey: ["athletes"] });
      toast({
        title: `Atleta ${name} Adicionado`,
        description: "O atleta foi adicionado com sucesso.",
      });
      return true;
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel adicionar o atleta. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return {
    createAthlete: createAthleteFn,
  };
};

export default useCreateAthlete;
