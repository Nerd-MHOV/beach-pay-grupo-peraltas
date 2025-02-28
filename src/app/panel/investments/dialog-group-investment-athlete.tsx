import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Athlete, Investment, InvestmentGroup } from "@prisma/client";
import FormGroupInvestmentAthlete from "./form-group-investment-athlete/form-group-investment-athlete";

const DialogGroupInvestmentAthlete = ({
  athlete,
  trigger,
  investmentGroup,
}: {
  athlete?: Athlete;
  trigger: React.JSX.Element;
  investmentGroup?: {
    investments: Investment[];
  } & InvestmentGroup;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {investmentGroup ? "Editar" : "Declarar"} Grupo de Investimento
          </DialogTitle>
          <DialogDescription>
            Informe os dados do investimento.
          </DialogDescription>
        </DialogHeader>
        <FormGroupInvestmentAthlete
          investmentGroup={investmentGroup}
          athlete={athlete}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DialogGroupInvestmentAthlete;
