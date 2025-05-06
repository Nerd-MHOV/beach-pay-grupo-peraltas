"use client";

import { Address, Member } from "@prisma/client";
import { createMember } from "../actions";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

const useCreateMember = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const createMemberFn = async (
    data: Omit<Member & {
      address: Omit<Address, "id" | "created_at" | "updated_at">,
      teacher_user_id?: string | null,
    }, "id" | "created_at" | "updated_at" | "address_id">
  ) => {
    try {
      const { name } = await createMember(data);
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast({
        title: `NOVO Membro ${name} Adicionado`,
        description: "O membro foi adicionado com sucesso.",
      });
      return true;
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel adiciona-lo. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return {
    createMember: createMemberFn,
  };
};

export default useCreateMember;
