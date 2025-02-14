import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import React from "react";
import FormCreateTournament from "./form-create-tournament";

const DialogCreateTournament = ({
  combobox = false,
}: {
  combobox?: boolean;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {combobox ? (
          <Button size="sm" variant="ghost">
            <Plus /> Novo Torneio
          </Button>
        ) : (
          <Button size="sm">
            <Plus />
            Torneio
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Torneio</DialogTitle>
          <DialogDescription>Informe os dados do torneio.</DialogDescription>
        </DialogHeader>
        <FormCreateTournament />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateTournament;
