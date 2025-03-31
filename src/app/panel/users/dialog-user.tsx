import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import FormUser from "./form-user";
import { User } from "@prisma/client";

const DialogCreateUser = ({
  trigger,
  user,
}: {
  trigger: React.JSX.Element;
  user?: Omit<User, "passwd">;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>{user ? "Editar" : "Adicionar"} Usuario</DialogTitle>
          <DialogDescription>Informe os dados do usuário.</DialogDescription>
        </DialogHeader>
        <FormUser user={user} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateUser;
