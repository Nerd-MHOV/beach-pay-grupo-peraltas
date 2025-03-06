"use client";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { Investment, InvestmentType } from "@prisma/client";
import SelectComponentColumn from "@/components/tables/columns/selectColumn";
import { ExtendedColumnDef } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/tables/columns/sortingColumn";

type dashboardColumnsDef = ExtendedColumnDef<
  {
    athlete: string;
    total: string;
    subRows: (Investment & { investmentType: InvestmentType })[] | undefined;
  },
  undefined
>;
export const columns: dashboardColumnsDef[] = [
  SelectComponentColumn as dashboardColumnsDef,
  {
    accessorKey: "athlete",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Atleta" />
    ),
    label: "Atleta",
  },
  {
    accessorKey: "total",
    cell: ({ row }) => (
      <Button variant="ghost" onClick={row.getToggleExpandedHandler()}>
        <ChevronsUpDown className="h-4 w-4" />
        <span className="">{row.original.total}</span>
      </Button>
    ),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" />
    ),
    label: "Total",
  },
];
