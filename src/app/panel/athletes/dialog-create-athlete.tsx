import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React from "react";
import FormCreateAthlete from "./form-create-athlete";

const DialogCreateAthlete = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus />
          Atleta
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Atleta</DialogTitle>
          <DialogDescription>Informe os dados do atleta.</DialogDescription>
        </DialogHeader>
        <FormCreateAthlete />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateAthlete;
