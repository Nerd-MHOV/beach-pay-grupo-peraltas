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
import { Member } from "@beach-pay/database";

const DialogMember = async ({
  trigger,
  member,
}: {
  trigger?: React.JSX.Element;
  member?: Member;
}) => {
  const child = trigger || (
    <Button size="sm">
      <Plus />
      Membro
    </Button>
  );
  return (
    <Dialog>
      <DialogTrigger asChild>{child}</DialogTrigger>

      <DialogContent className="max-h-[98vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Membro</DialogTitle>
          <DialogDescription>Informe os dados do membro.</DialogDescription>
        </DialogHeader>
        <FormMember member={member} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogMember;
