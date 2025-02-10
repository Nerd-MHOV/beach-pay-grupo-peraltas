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

const DialogCreateTournament = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus />
          Torneio
        </Button>
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
