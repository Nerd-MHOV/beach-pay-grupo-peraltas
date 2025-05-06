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
import FormMember from "./form-member";

const DialogMember = async ({ trigger }: { trigger?: React.JSX.Element }) => {
  const child = trigger || (
    <Button size="sm">
      <Plus />
      Membro
    </Button>
  );
  return (
    <Dialog>
      <DialogTrigger asChild>{child}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Membro</DialogTitle>
          <DialogDescription>Informe os dados do membro.</DialogDescription>
        </DialogHeader>
        <FormMember />
      </DialogContent>
    </Dialog>
  );
};

export default DialogMember;
