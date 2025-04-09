import React, { Suspense } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import LoadingData from "@/components/LoadingData";
import TableUsers from "./table-users";
import DialogCreateUser from "./dialog-user";

const Page = () => {
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Usuarios</Header.Title>
        <Header.Content>
          <DialogCreateUser
            trigger={
              <Button size="sm">
                <Plus />
                Usuário
              </Button>
            }
          />
        </Header.Content>
      </Header.Root>

      <Suspense fallback={<LoadingData message="Buscando Usuarios" />}>
        <TableUsers />
      </Suspense>
    </div>
  );
};

export default Page;
