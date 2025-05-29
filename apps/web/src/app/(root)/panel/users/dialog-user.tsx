import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import FormUser from "./form-user";
import { $Enums, User } from "@beach-pay/database";

const DialogCreateUser = ({
  permission,
  trigger,
  user,
  onCreate,
}: {
  trigger: React.JSX.Element;
  user?: Omit<User, "passwd" | "hashed_refresh_token">;
  permission?: $Enums.UserRole;
  onCreate?: (user: User) => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>{user ? "Editar" : "Adicionar"} Usuario</DialogTitle>
          <DialogDescription>Informe os dados do usuário.</DialogDescription>
        </DialogHeader>
        <FormUser onCreate={onCreate} permission={permission} user={user} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateUser;
