import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./columns";
import { getTournaments } from "./actions";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const TableTournaments = async () => {
  const tournaments = await getTournaments();

  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable
        columns={columns}
        data={tournaments.map((tournament) => {
          return {
            ...tournament,
            arena_name: `${tournament.arena.name} - ${tournament.arena.city}`,
            date: `${format(tournament.fromDate, "dd LLL", {
              locale: ptBR,
            })} - ${format(tournament.toDate, "dd LLL, y", {
              locale: ptBR,
            })}`,
          };
        })}
      />
    </div>
  );
};

export default TableTournaments;
