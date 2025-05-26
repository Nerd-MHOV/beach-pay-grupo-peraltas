import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./columns";
import { getMembers } from "./actions";

const TableMembers = async () => {
  const members = await getMembers();

  return (
    <div className="bg-white p-7 rounded-xl shadow-lg overflow-auto">
      <DataTable
        columns={columns}
        pdfTitle="Membros"
        data={members.map((member) => {
          const calculateAge = (birthday: Date) => {
            const ageDifMs = Date.now() - new Date(birthday).getTime();
            const ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
          };
          return {
            ...member,
            age: calculateAge(member.birthday),
          };
        })}
      />
    </div>
  );
};

export default TableMembers;
