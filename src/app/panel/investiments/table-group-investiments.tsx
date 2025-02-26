import React from "react";
import { getGroupInvestiments } from "./actions";
import { DataTable } from "@/components/ui/data-table";
import { columnsGroup } from "./columns-group";

const TableGroupInvestiments = async ({
  athleteId,
}: {
  athleteId?: string;
}) => {
  const groupInvestiments = await getGroupInvestiments(athleteId);

  return (
    <DataTable
      columns={columnsGroup}
      data={groupInvestiments.map((group) => ({
        ...group,
        athlete: group.athlete.name,
      }))}
    />
  );
};

export default TableGroupInvestiments;
