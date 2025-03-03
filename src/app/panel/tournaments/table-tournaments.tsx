import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./columns";
import { getTournaments } from "./actions";

const TableTournaments = async () => {
  const tournaments = await getTournaments();

  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable
        columns={columns}
        data={tournaments.map((tournament) => {
          return {
            ...tournament,
            arena_name: tournament.arena.name,
          };
        })}
      />
    </div>
  );
};

export default TableTournaments;
