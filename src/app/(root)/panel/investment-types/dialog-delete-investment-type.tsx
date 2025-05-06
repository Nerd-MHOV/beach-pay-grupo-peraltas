import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { InvestmentType } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { deleteInvestmentType } from "./actions";
import { toast } from "@/hooks/use-toast";

const DialogDeleteInvestmentType = ({
  investmentType,
}: {
  investmentType: InvestmentType;
}) => {
  const handleDeleteInvetmentType = async () => {
    const deleted = await deleteInvestmentType(investmentType.id);

    if (deleted)
      toast({
        title: `${deleted.name} Deletado`,
        description: "O tipo de investimento foi deletado com sucesso.",
      });
    else
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel deletar o tipo de investimento. Tente novamente.",
        variant: "destructive",
      });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash /> Deletar
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Deletar Tipo de Investimento</DialogTitle>
          <DialogDescription>
            Você tem certeza que deseja deletar o tipo de investimento{" "}
            <strong>{investmentType?.name}</strong>? Essa ação não pode ser
            desfeita.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button variant="destructive" onClick={handleDeleteInvetmentType}>
            Deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDeleteInvestmentType;
