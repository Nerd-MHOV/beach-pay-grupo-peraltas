"use client";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { updateMember } from "../actions";
import { Address, Member } from "@prisma/client";

const useUpdateMember = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const updateMemberFn = async (
    data: Omit<
      Member & {
        address: Omit<Address, "created_at" | "updated_at">;
        teacher_user_id?: string | null;
      },
      "created_at" | "updated_at" | "address_id"
    >
  ) => {
    try {
      const member = await updateMember(data);
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast({
        title: `${member.name} Atualizado`,
        description: "O membro foi atualizado com sucesso.",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel atualiza-lo. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return {
    updateMember: updateMemberFn,
  };
};

export default useUpdateMember;
