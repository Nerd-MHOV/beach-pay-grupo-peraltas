import React, { Suspense } from "react";
import DialogCreateAthlete from "./form/dialog-athlete";
import TableAthletes from "./table-athletes";
import { Header } from "@/components/Header";
import LoadingData from "@/components/LoadingData";

const Page = () => {
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Atletas</Header.Title>
        <Header.Content>
          <DialogCreateAthlete />
        </Header.Content>
      </Header.Root>

      <Suspense fallback={<LoadingData message="Buscando Atletas" />}>
        <TableAthletes />
      </Suspense>
    </div>
  );
};

export default Page;
