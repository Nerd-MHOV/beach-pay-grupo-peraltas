import React from "react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { getUsers } from "./actions";

const TableUsers = async () => {
  const users = await getUsers();
  return (
    <div className="bg-white p-7 rounded-xl shadow-lg overflow-auto">
      <DataTable columns={columns} data={users} pdfTitle="Arenas" />
    </div>
  );
};

export default TableUsers;
