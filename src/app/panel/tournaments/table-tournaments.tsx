import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./columns";
import { getTournaments } from "./actions";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const TableTournaments = async () => {
  const tournaments = await getTournaments();

  return (
    <div className="bg-white p-7 rounded-xl shadow-lg overflow-auto">
      <DataTable
        columns={columns}
        pdfTitle="Torneios"
        data={tournaments.map((tournament) => {
          return {
            ...tournament,
            arena_name: `${tournament.arena.name} - ${tournament.arena.address.city}`,
            date: `${format(tournament.date_from, "dd LLL", {
              locale: ptBR,
            })} - ${format(tournament.date_to, "dd LLL, y", {
              locale: ptBR,
            })}`,
          };
        })}
      />
    </div>
  );
};

export default TableTournaments;
