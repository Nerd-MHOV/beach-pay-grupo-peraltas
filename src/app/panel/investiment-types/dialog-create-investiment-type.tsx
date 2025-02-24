import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import FormCreateInvestimentType from "./form-create-investiment-type";
import { InvestimentType } from "@prisma/client";

const DialogCreateInvestimentType = ({
  trigger,
  investimentType,
}: {
  trigger: React.JSX.Element;
  investimentType?: InvestimentType;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* {combobox ? (
          <Button size="sm" variant="ghost">
            <Plus /> Novo Tipo de Investimento
          </Button>
        ) : (
          <Button size="sm">
            <Plus />
            Tipo de investimento
          </Button>
        )} */}
        {trigger}
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {investimentType ? "Editar" : "Adicionar"} Tipo de Investimento
          </DialogTitle>
          <DialogDescription>
            Informe os dados do tipo de investimento.
          </DialogDescription>
        </DialogHeader>
        <FormCreateInvestimentType investimentType={investimentType} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateInvestimentType;
