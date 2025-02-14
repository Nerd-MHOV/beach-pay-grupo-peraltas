import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Athlete } from "@prisma/client";
import FormGroupInvestmentAthlete from "../_forms/form-group-investment-athlete";

const DialogGroupInvestmentAthlete = ({ athlete }: { athlete: Athlete }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full text-start justify-start cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0"
        >
          Declarar Grupo de Investimento
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Declarar Grupo de Investimento</DialogTitle>
          <DialogDescription>
            Informe os dados do investimento.
          </DialogDescription>
        </DialogHeader>
        <FormGroupInvestmentAthlete athlete={athlete} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogGroupInvestmentAthlete;
