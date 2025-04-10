import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import FormCreateArena from "./form-create-arena";
import { Address, Arena } from "@prisma/client";

const DialogCreateArena = ({
  trigger,
  arena,
  onCreate,
}: {
  trigger: React.JSX.Element;
  arena?: Arena & {
    address: Address;
  };
  onCreate?: (arena: Arena) => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>{arena ? "Editar" : "Adicionar"} Arena</DialogTitle>
          <DialogDescription>Informe os dados da Arena.</DialogDescription>
        </DialogHeader>
        <FormCreateArena arena={arena} onCreate={onCreate} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateArena;
