import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FormInvestmentAthlete from "../_forms/form-investment-athlete";
import { Athlete, Investiment } from "@prisma/client";
import React, { JSX } from "react";
import { format } from "date-fns";

const DialogInvestmentAthlete = ({
  athlete,
  investiment,
  trigger,
  clean = false,
}: {
  athlete?: Athlete;
  investiment?: Investiment;
  trigger?: JSX.Element;
  clean?: boolean;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          {investiment?.updatedAt && (
            <div className="absolute top-0 right-8 p-4">
              <span className="text-sm text-gray-400">
                Última atualização em{" "}
                {format(investiment.updatedAt, "dd/MM/yyyy HH:mm")}
              </span>
            </div>
          )}
          <DialogTitle>
            {investiment ? "Editar" : "Declarar"} Investimento
          </DialogTitle>
          <DialogDescription>
            Informe os dados do investimento.
          </DialogDescription>
        </DialogHeader>
        <FormInvestmentAthlete
          investiment={investiment}
          athlete={athlete}
          clean={clean}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DialogInvestmentAthlete;
