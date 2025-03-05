import React from "react";
import { columns } from "./columns";
import { getDashboard } from "../actions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTable } from "@/components/ui/data-table";

const TableDashboard = ({
  data,
}: {
  data?: Awaited<ReturnType<typeof getDashboard>>["investimentByAthlete"];
}) => {
  if (!data) return null;
  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable
        columns={columns}
        data={data.map((item) => ({
          athlete: item?.athlete?.name || "",
          total:
            item.value?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            }) || "",
          subRows: item?.athlete?.investments,
        }))}
        renderDetails={(row) => (
          <div className="p-4 bg-gray-100">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ativo</TableHead>
                  <TableHead>Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {row.subRows?.map((subRow) => (
                  <TableRow key={subRow.id}>
                    <TableCell>{subRow.investmentType.name}</TableCell>
                    <TableCell>
                      {subRow.value.toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: "currency",
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      />
    </div>
  );
};

export default TableDashboard;
