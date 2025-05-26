import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InvestmentTournament } from "@beach-pay/database";
import { Trash2 } from "lucide-react";
import { deleteInvestmentTournament } from "../actions";

const DialogDeleteInvestmentTournament = ({
  investment,
}: {
  investment: InvestmentTournament;
}) => {
  const submit = async () => {
    await deleteInvestmentTournament(investment);
    window.location.reload();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="h-4 w-4" /> Excluir
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Excluir Grupo</DialogTitle>
          <DialogDescription>
            Você tem certeza que deseja excluir este Grupo de Investimento?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button variant="destructive" onClick={submit}>
            Excluir
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDeleteInvestmentTournament;
