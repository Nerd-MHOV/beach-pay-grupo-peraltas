import React from "react";
import { getInvestments } from "../actions";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const TableInvestments = ({
  investments,
}: {
  investments: Awaited<ReturnType<typeof getInvestments>>;
}) => {
  return (
    <DataTable
      columns={columns}
      data={investments.map((investment) => {
        return {
          ...investment,
          athlete_name: investment.athlete.name,
          investmentType: investment.investmentType.name,
        };
      })}
    />
  );
};

export default TableInvestments;
