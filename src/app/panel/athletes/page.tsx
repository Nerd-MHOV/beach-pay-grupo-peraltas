import React from "react";
import DialogCreateAthlete from "./_dialogs/dialog-create-athlete";
import { getAthletes } from "./actions";
import TableAthletes from "./_tables/table-athletes";
import Header from "@/components/Header";

const Page = async () => {
  const athlete = await getAthletes();

  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header title="Atletas">
        <div className="flex gap-2">
          <DialogCreateAthlete />
        </div>
      </Header>

      <TableAthletes athletes={athlete} />
    </div>
  );
};

export default Page;
