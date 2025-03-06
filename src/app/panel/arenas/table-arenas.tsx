import React from "react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { getArenas } from "./actions";

const TableArenas = async () => {
  const arenas = await getArenas();
  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable columns={columns} data={arenas} pdfTitle="Arenas" />
    </div>
  );
};

export default TableArenas;
