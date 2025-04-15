import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import FormTournament from "./form-tournament";
import { Tournament } from "@prisma/client";

const DialogCreateTournament = ({
  trigger,
  tournament,
  onCreateTournament,
}: {
  trigger: React.JSX.Element;
  tournament?: Tournament;
  onCreateTournament?: (tournament: Tournament) => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Torneio</DialogTitle>
          <DialogDescription>Informe os dados do torneio.</DialogDescription>
        </DialogHeader>
        <FormTournament
          tournament={tournament}
          onCreateTournament={onCreateTournament}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateTournament;
