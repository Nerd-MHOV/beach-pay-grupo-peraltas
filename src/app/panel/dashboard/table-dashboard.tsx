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
import { RowInput } from "jspdf-autotable";
import { Row } from "@tanstack/react-table";

const TableDashboard = ({
  data,
  pdfDescription,
}: {
  pdfDescription?: string;
  data?: NonNullable<
    Awaited<ReturnType<typeof getDashboard>>
  >["investmentByAthlete"];
}) => {
  if (!data) return null;

  const datamap = data.map((item) => ({
    athlete_id: item?.athlete?.id || "",
    athlete: item?.athlete?.name || "",
    total:
      item.value?.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }) || "",
    subRows: item?.athlete?.investments,
    pix_key: item?.athlete?.pixKey || "",
  }));

  const pdfDetails: (row: Row<(typeof datamap)[number]>) => RowInput[] = (
    row
  ) => {
    const rowData: RowInput[] = [
      row.getVisibleCells().map((cell) => ({
        content: cell.getValue()?.toString() || "",
        styles: { fillColor: [255, 255, 255] },
      })),
    ];
    row.original.subRows?.forEach((subRow) => {
      const name = subRow.investmentType.name;
      const value = (subRow.value || "").toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
      });
      rowData.push([
        { content: "", styles: { fillColor: [211, 211, 211] } },
        { content: name, styles: { fillColor: [211, 211, 211] } },
        { content: value, styles: { fillColor: [211, 211, 211] } },
        { content: "", styles: { fillColor: [211, 211, 211] } },
        { content: "", styles: { fillColor: [211, 211, 211] } },
      ]);
    });

    return rowData;
  };

  const csvDetails: (row: Row<(typeof datamap)[number]>) => string[] = (
    row
  ) => {
    const rowData = [
      row
        .getVisibleCells()
        .map((cell) => {
          const cellValue = cell.getValue()?.toString() || "";
          return `"${cellValue.replace(/"/g, '""')}"`;
        })
        .join(","),
    ];
    row.original.subRows?.forEach((subRow) => {
      const name = subRow.investmentType.name;
      const value = (subRow.value || "").toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
      });
      const rowArr = ["", "", `"${name}"`, `"${value}"`, ""];
      rowData.push(rowArr.join(","));
    });
    rowData.push(
      rowData[0]
        .split(",")
        .map(() => "")
        .join(",")
    );
    return rowData;
  };

  const renderDetails = (row: (typeof datamap)[number]) => (
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
  );
  return (
    <div className="bg-white p-7 rounded-xl shadow-lg overflow-auto">
      <DataTable
        columns={columns}
        pdfTitle="Relatório de investimentos por atleta"
        pdfDescription={pdfDescription}
        data={datamap}
        pdfDetails={pdfDetails}
        renderDetails={renderDetails}
        csvDetails={csvDetails}
      />
    </div>
  );
};

export default TableDashboard;
