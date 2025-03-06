"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "./input";
import { Button } from "./button";
import { Download } from "lucide-react";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { DataTableViewOptions } from "../tables/columns/toggleColumn";
interface DataTableProps<TData, TValue> {
  columns: ExtendedColumnDef<TData, TValue>[];
  data: TData[];
  renderDetails?: (data: TData) => React.ReactNode;
  pdfDescription?: string;
  pdfTitle?: string;
}

export type ExtendedColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
  label: string;
};

export function DataTable<TData, TValue>({
  columns,
  data,
  renderDetails,
  pdfDescription,
  pdfTitle,
}: DataTableProps<TData, TValue>) {
  const [filter, setFilter] = useState("");
  const [expanded, setExpanded] = useState<true | Record<string, boolean>>({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: () => !!renderDetails,
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter: filter,
      expanded: expanded,
      sorting: sorting,
    },
    onExpandedChange: setExpanded,
    onGlobalFilterChange: setFilter,
    onSortingChange: setSorting,
  });

  const exportPdf = (rows: Row<TData>[]) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    if (pdfTitle)
      doc.text(pdfTitle, doc.internal.pageSize.getWidth() / 2, 15, {
        align: "center",
      });
    doc.setFontSize(12);
    if (pdfDescription)
      doc.text(pdfDescription, 10, 25, {
        align: "center",
      });

    const tableData = rows.map((row) =>
      row.getVisibleCells().map((cell) => cell.getValue() || " ")
    );
    const tableHeaders = table
      .getAllColumns()
      .filter((column) => column.getIsVisible())
      .map(
        (column) =>
          (column.columnDef as ExtendedColumnDef<TData, undefined>).label ||
          column.id
      );

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
      startY: 35,
    });

    doc.save("pdf.pdf");
  };

  const exportCsv = (rows: Row<TData>[]) => {
    // Get headers from visible columns
    const tableHeaders = table
      .getAllColumns()
      .filter((column) => column.getIsVisible())
      .map(
        (column) =>
          (column.columnDef as ExtendedColumnDef<TData, undefined>).label ||
          column.id
      );

    // Create CSV rows data from visible cells of each row
    const csvRows = rows.map((row) =>
      row
        .getVisibleCells()
        .map((cell) => {
          // Escape double quotes by doubling them
          const cellValue = cell.getValue()?.toString() || "";
          return `"${cellValue.replace(/"/g, '""')}"`;
        })
        .join(",")
    );

    // Combine headers and row data
    const csvContent = [tableHeaders.join(","), ...csvRows].join("\n");

    // Create a blob and trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Buscar..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="max-w-sm"
        />
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            exportPdf(
              table.getIsSomeRowsSelected()
                ? table.getSelectedRowModel().rows
                : table.getPrePaginationRowModel().rows
            )
          }
          variant={"ghost"}
        >
          <Download /> PDF
        </Button>
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            exportCsv(
              table.getIsSomeRowsSelected()
                ? table.getSelectedRowModel().rows
                : table.getPrePaginationRowModel().rows
            )
          }
          variant={"ghost"}
        >
          <Download /> CSV
        </Button>
        <DataTableViewOptions table={table} />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.getIsExpanded() && (
                    <TableRow>
                      <TableCell colSpan={columns.length}>
                        {renderDetails?.(row.original)}
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Próxima
        </Button>
      </div>
    </>
  );
}
