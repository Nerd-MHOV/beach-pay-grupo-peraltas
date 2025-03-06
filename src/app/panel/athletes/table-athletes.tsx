import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./columns";
import { getAthletes } from "./actions";

const TableAthletes = async () => {
  const athlete = await getAthletes();
  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable
        columns={columns}
        pdfTitle="Atletas"
        data={athlete.map((ath) => {
          const calculateAge = (birthday: Date) => {
            const ageDifMs = Date.now() - new Date(birthday).getTime();
            const ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
          };
          return {
            ...ath,
            age: calculateAge(ath.birthday),
          };
        })}
      />
    </div>
  );
};

export default TableAthletes;
