import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FormInvestmentAthlete from "../_forms/form-investment-athlete";
import { Button } from "@/components/ui/button";
import { Athlete } from "@prisma/client";
import { Plus } from "lucide-react";

const DialogInvestmentAthlete = ({
  athlete,
  combobox,
  clean = false,
}: {
  athlete?: Athlete;
  combobox?: boolean;
  clean?: boolean;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {combobox ? (
          <Button size="sm" variant="ghost">
            <Plus /> Novo Investimento
          </Button>
        ) : (
          <Button
            variant="ghost"
            className="w-full text-start justify-start cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0"
          >
            Declarar Investimento
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Declarar Investimento</DialogTitle>
          <DialogDescription>
            Informe os dados do investimento.
          </DialogDescription>
        </DialogHeader>
        <FormInvestmentAthlete athlete={athlete} clean={clean} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogInvestmentAthlete;
