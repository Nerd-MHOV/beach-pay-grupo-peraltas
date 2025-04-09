"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Athlete } from "@prisma/client";
import { DialogClose } from "@radix-ui/react-dialog";
import { Trash2 } from "lucide-react";
import { deleteAthlete } from "../actions";

const DialogDeleteAthlete = ({ athlete }: { athlete: Athlete }) => {
  const onDelete = async () => {
    await deleteAthlete(athlete.id);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="bg-red-200 text-red-800 hover:bg-red-300"
        >
          <Trash2 /> Excluir Atleta
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deseja deletar o cadastro ?</DialogTitle>
          <DialogDescription>
            Atleta - {athlete.name}
            {/* <p className="p-2 text-red-400 bg-zinc-100 border-red-300 border rounded-md my-2">
              <b>Atenção</b> ao deletar o atleta, será <b>apagado</b> todos
              os <b></b> de <b>devolução</b> e <b>retiradas</b>, referente
              ao mesmo!
            </p> */}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button variant="destructive" onClick={onDelete}>
            Deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDeleteAthlete;
