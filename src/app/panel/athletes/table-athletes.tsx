import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./columns";
import { getAthletes } from "./actions";

const TableAthletes = async () => {
  const athlete = await getAthletes();
  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable columns={columns} data={athlete} />
    </div>
  );
};

export default TableAthletes;
