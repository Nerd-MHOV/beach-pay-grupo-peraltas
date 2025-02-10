import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React from "react";
import FormCreateInvestimentType from "./form-create-investiment-type";

const DialogCreateInvestimentType = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus />
          Investimento
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Tipo de Investimento</DialogTitle>
          <DialogDescription>
            Informe os dados do tipo de investimento.
          </DialogDescription>
        </DialogHeader>
        <FormCreateInvestimentType />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateInvestimentType;
