import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Member, Investment, InvestmentTournament } from "@prisma/client";
import FormInvestmentTournament from "./form-investment-tournament";

const DialogGroupInvestmentAthlete = ({
  athlete,
  trigger,
  investmentTournament,
}: {
  athlete?: Member;
  trigger: React.JSX.Element;
  investmentTournament?: {
    investments: Investment[];
  } & InvestmentTournament;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {investmentTournament ? "Editar" : "Declarar"} Investimentos para o
            torneio
          </DialogTitle>
          <DialogDescription>
            Informe os dados do investimento.
          </DialogDescription>
        </DialogHeader>
        <FormInvestmentTournament
          investmentTournament={investmentTournament}
          athlete={athlete}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DialogGroupInvestmentAthlete;
