import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import FormCreateInvestmentType from "./form-create-investment-type";
import { InvestmentType } from "@prisma/client";

const DialogCreateInvestmentType = ({
  trigger,
  investmentType,
  onCreate,
}: {
  trigger: React.JSX.Element;
  investmentType?: InvestmentType;
  onCreate?: (investmentType: InvestmentType) => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {investmentType ? "Editar" : "Adicionar"} Tipo de Investimento
          </DialogTitle>
          <DialogDescription>
            Informe os dados do tipo de investimento.
          </DialogDescription>
        </DialogHeader>
        <FormCreateInvestmentType
          investmentType={investmentType}
          onCreate={onCreate}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateInvestmentType;
