import React from "react";
import { getGroupInvestments } from "../actions";
import { DataTable } from "@/components/ui/data-table";
import { columnsGroup } from "./columns";

const TableGroupInvestments = ({
  groupInvestments,
  pdfDescription,
}: {
  pdfDescription?: string;
  groupInvestments: Awaited<ReturnType<typeof getGroupInvestments>>;
}) => {
  return (
    <DataTable
      columns={columnsGroup}
      pdfTitle="Relatório de investimentos por grupo"
      pdfDescription={pdfDescription}
      data={groupInvestments.map((group) => ({
        ...group,
        athlete: group.athlete.name,
      }))}
    />
  );
};

export default TableGroupInvestments;
