import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Athlete, Investiment, InvestimentGroup } from "@prisma/client";
import FormGroupInvestmentAthlete from "../_forms/form-group-investment-athlete";

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
      <DialogTrigger asChild>
        {/* {combobox ? (
          <Button size="sm" variant="ghost">
            <Plus /> Novo Grupo de Investimento
          </Button>
        ) : (
          <Button
            variant="ghost"
            className="w-full text-start justify-start cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0"
          >
            Declarar Grupo de Investimento
          </Button>
        )} */}
        {trigger}
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Declarar Grupo de Investimento</DialogTitle>
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
