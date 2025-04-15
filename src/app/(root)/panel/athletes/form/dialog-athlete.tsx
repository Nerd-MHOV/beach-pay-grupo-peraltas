import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React from "react";
import FormAthlete from "./form-athlete";

const DialogCreateAthlete = async ({
  trigger,
}: {
  trigger?: React.JSX.Element;
  // athlete?: Omit<Athlete, "passwd">;
  // permission?: $Enums.UserRole;
}) => {
  const child = trigger || (
    <Button size="sm">
      <Plus />
      Atleta
    </Button>
  );
  return (
    <Dialog>
      <DialogTrigger asChild>{child}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Atleta</DialogTitle>
          <DialogDescription>Informe os dados do atleta.</DialogDescription>
        </DialogHeader>
        <FormAthlete />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateAthlete;
