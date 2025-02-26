import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Athlete, Investiment, InvestimentGroup } from "@prisma/client";
import FormGroupInvestmentAthlete from "../_forms/form-group-investiment-athlete/form-group-investment-athlete";
import LoadingData from "@/components/LoadingData";
import { Suspense } from "react";
import { getAthletes } from "../actions";
import { getTournaments } from "../../tournaments/actions";

const DialogGroupInvestmentAthlete = async ({
  athlete,
  trigger,
  investimentGroup,
}: {
  athlete?: Athlete;
  trigger: React.JSX.Element;
  investimentGroup?: {
    investiments: Investiment[];
  } & InvestimentGroup;
}) => {
  const athletes = await getAthletes();
  const tournaments = await getTournaments();
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {investimentGroup ? "Editar" : "Declarar"} Grupo de Investimento
          </DialogTitle>
          <DialogDescription>
            Informe os dados do investimento.
          </DialogDescription>
        </DialogHeader>
        <Suspense fallback={<LoadingData />}>
          <FormGroupInvestmentAthlete
            investimentGroup={investimentGroup}
            athlete={athlete}
            athletes={athletes}
            tournaments={tournaments}
          />
        </Suspense>
      </DialogContent>
    </Dialog>
  );
};

export default DialogGroupInvestmentAthlete;
