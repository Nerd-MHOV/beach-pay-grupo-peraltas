import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import React from "react";
import FormCreateArena from "./form-create-arena";

const DialogCreateArena = ({ combobox = false }: { combobox?: boolean }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {combobox ? (
          <Button size="sm" variant="ghost">
            <Plus /> Nova arena
          </Button>
        ) : (
          <Button size="sm">
            <Plus />
            Arena
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Arena</DialogTitle>
          <DialogDescription>Informe os dados da Arena.</DialogDescription>
        </DialogHeader>
        <FormCreateArena />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateArena;
