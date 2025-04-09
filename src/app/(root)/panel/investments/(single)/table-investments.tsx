import React from "react";
import { getInvestments } from "../actions";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const TableInvestments = ({
  investments,
  pdfDescription,
}: {
  pdfDescription?: string;
  investments: Awaited<ReturnType<typeof getInvestments>>;
}) => {
  return (
    <DataTable
      columns={columns}
      pdfTitle="Relatório de investimentos"
      pdfDescription={pdfDescription}
      data={investments.map((investment) => {
        return {
          ...investment,
          athlete_name: investment.athlete.name,
          investment_type: investment.investment_type.name,
        };
      })}
    />
  );
};

export default TableInvestments;
