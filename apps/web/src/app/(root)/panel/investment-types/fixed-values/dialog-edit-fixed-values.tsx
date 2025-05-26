import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import FormEditFixedValues, { FixedValuesForm } from "./form-edit-fixed-values";
import { FixedValues } from "@beach-pay/database";

const DialogEditFixedValues = ({
  fixedValues,
}: {
  fixedValues: FixedValuesForm;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Editar Valores Fixos
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Valores Fixos</DialogTitle>
          <DialogDescription>Informe os valores fixos.</DialogDescription>
        </DialogHeader>

        <FormEditFixedValues fixedValues={fixedValues} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogEditFixedValues;
