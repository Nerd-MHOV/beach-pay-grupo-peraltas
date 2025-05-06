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
import { Member } from "@prisma/client";
import { DialogClose } from "@radix-ui/react-dialog";
import { Trash2 } from "lucide-react";
import { deleteMember } from "../actions";

const DialogDeleteMember = ({ member }: { member: Member }) => {
  const onDelete = async () => {
    await deleteMember(member.id);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="bg-red-200 text-red-800 hover:bg-red-300"
        >
          <Trash2 /> Excluir Membro
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deseja deletar o cadastro ?</DialogTitle>
          <DialogDescription>
            Atleta - {member.name}
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

export default DialogDeleteMember;
