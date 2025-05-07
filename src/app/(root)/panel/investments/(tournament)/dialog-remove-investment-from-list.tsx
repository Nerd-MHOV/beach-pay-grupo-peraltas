import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DialogRemoveInvestmentFromList = ({
  onClickDelete,
  onClickUnlink,
}: {
  onClickDelete: () => void;
  onClickUnlink: () => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          type="button"
          className="bg-red-100 text-red-800"
        >
          Remover
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Desvincular ou Deletar</DialogTitle>
          <DialogDescription>
            Quer apenas remover o investimento da lista ou deseja{" "}
            <b>excluí-lo permanentemente</b>?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button
            variant="destructive"
            className="mr-2"
            onClick={onClickDelete}
          >
            Excluir
          </Button>
          <Button variant="outline" onClick={onClickUnlink}>
            Desvincular
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogRemoveInvestmentFromList;
