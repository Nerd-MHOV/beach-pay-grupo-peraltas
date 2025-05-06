import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FormInvestmentAthlete from "./form-investment-athlete";
import { Member, Investment } from "@prisma/client";
import React, { JSX } from "react";
import { format } from "date-fns";

const DialogInvestmentAthlete = ({
  athlete,
  investment,
  trigger,
  onCreateInvestment,
  clean = false,
}: {
  athlete?: Member;
  investment?: Investment;
  trigger?: JSX.Element;
  onCreateInvestment?: (investment: Investment) => void;
  clean?: boolean;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          {investment?.updated_at && (
            <div className="absolute top-0 right-8 p-4">
              <span className="text-sm text-gray-400">
                Última atualização em{" "}
                {format(investment.updated_at, "dd/MM/yyyy HH:mm")}
              </span>
            </div>
          )}
          <DialogTitle>
            {investment ? "Editar" : "Declarar"} Investimento
          </DialogTitle>
          <DialogDescription>
            Informe os dados do investimento.
          </DialogDescription>
        </DialogHeader>
        <FormInvestmentAthlete
          onCreateInvestment={onCreateInvestment}
          investment={investment}
          athlete={athlete}
          clean={clean}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DialogInvestmentAthlete;
