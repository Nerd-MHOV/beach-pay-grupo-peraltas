import React, { Suspense } from "react";
import DialogMember from "./form/dialog-member";
import TableMembers from "./table-members";
import { Header } from "@/components/Header";
import LoadingData from "@/components/LoadingData";

const Page = () => {
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Membros</Header.Title>
        <Header.Content>
          <DialogMember />
        </Header.Content>
      </Header.Root>

      <Suspense fallback={<LoadingData message="Buscando Atletas" />}>
        <TableMembers />
      </Suspense>
    </div>
  );
};

export default Page;
