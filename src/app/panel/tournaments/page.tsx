import Header from "@/components/Header";
import React from "react";
import DialogCreateTournament from "./dialog-create-tournament";
import TableTournaments from "./table-tournaments";
import { getTournaments } from "./actions";

const Page = async () => {
  const tournaments = await getTournaments();
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header title="Torneios">
        <div className="flex gap-2">
          <DialogCreateTournament />
        </div>
      </Header>

      <TableTournaments tournaments={tournaments} />
    </div>
  );
};

export default Page;
