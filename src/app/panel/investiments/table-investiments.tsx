import React from "react";
import { getInvestiments } from "./actions";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const TableInvestiments = async ({ athleteId }: { athleteId?: string }) => {
  const investiments = await getInvestiments(athleteId);
  return (
    <DataTable
      columns={columns}
      data={investiments.map((investiment) => {
        return {
          ...investiment,
          athlete_name: investiment.athlete.name,
          investimentType: investiment.investimentType.name,
        };
      })}
    />
  );
};

export default TableInvestiments;
