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

const DialogGroupInvestmentAthlete = ({
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
        <FormGroupInvestmentAthlete
          investimentGroup={investimentGroup}
          athlete={athlete}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DialogGroupInvestmentAthlete;
