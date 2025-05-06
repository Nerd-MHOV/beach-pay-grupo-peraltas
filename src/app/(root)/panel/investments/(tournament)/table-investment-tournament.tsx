import React from "react";
import { getInvestmentTournaments } from "../actions";
import { DataTable } from "@/components/ui/data-table";
import { columnsGroup } from "./columns";

const TableInvestmentTournament = ({
  investmentTournaments,
  pdfDescription,
}: {
  pdfDescription?: string;
  investmentTournaments: Awaited<ReturnType<typeof getInvestmentTournaments>>;
}) => {
  return (
    <DataTable
      columns={columnsGroup}
      pdfTitle="Relatório de Investimentos por Torneio"
      pdfDescription={pdfDescription}
      data={investmentTournaments.map((invTourn) => ({
        ...invTourn,
        athlete: invTourn.athlete.name,
      }))}
    />
  );
};

export default TableInvestmentTournament;
