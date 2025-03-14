"use client";
import React from "react";
import { columns } from "../../dashboard/columns";
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
import { getTournamentById } from "../actions";
import { Investment, InvestmentType } from "@prisma/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const TableTournamentDescription = ({
  tournament,
}: {
  tournament: NonNullable<Awaited<ReturnType<typeof getTournamentById>>>;
}) => {
  const datamap = tournament.investmentGroup
    .reduce(
      (acc, curr) => {
        const newacc = acc;
        if (newacc.some((e) => e.athlete_id === curr.athleteId)) {
          const index = newacc.findIndex(
            (e) => e.athlete_id === curr.athleteId,
          );
          newacc[index].total += curr.investments.reduce(
            (acci, curri) => acci + curri.value,
            0,
          );
          newacc[index].subRows?.push(...curr.investments);
        } else {
          newacc.push({
            athlete_id: curr.athleteId,
            athlete: curr.athlete.name,
            total: curr.investments.reduce(
              (acci, curri) => acci + curri.value,
              0,
            ),
            subRows: curr.investments,
            pix_key: curr.athlete.pixKey,
          });
        }

        return newacc;
      },
      [] as {
        athlete: string;
        athlete_id: string;
        total: number;
        subRows:
          | (Investment & {
              investmentType: InvestmentType;
            })[]
          | undefined;
        pix_key: string;
      }[],
    )
    .map((tr) => ({
      ...tr,
      total: tr.total.toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
      }),
    }));

  const pdfDetails: (row: Row<(typeof datamap)[number]>) => RowInput[] = (
    row,
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

  const csvDetails: (row: Row<(typeof datamap)[number]>) => string[] = (
    row,
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
        .join(","),
    );
    return rowData;
  };

  return (
    <div className="bg-white p-7 rounded-xl shadow-lg overflow-auto">
      <DataTable
        columns={columns}
        pdfTitle={`Relatório do Torneio ${tournament.name}`}
        pdfDescription={`${tournament.arena.name} - ${tournament.arena.city} - ${format(tournament.fromDate, "dd MMM", { locale: ptBR })} à ${format(tournament.toDate, "dd MMM yyyy", { locale: ptBR })}`}
        data={datamap}
        pdfDetails={pdfDetails}
        csvDetails={csvDetails}
        renderDetails={renderDetails}
      />
    </div>
  );
};

export default TableTournamentDescription;
