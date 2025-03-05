"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown } from "lucide-react";
import { Investment, InvestmentType } from "@prisma/client";

export const columns: ColumnDef<{
  athlete: string;
  total: string;
  subRows: (Investment & { investmentType: InvestmentType })[] | undefined;
}>[] = [
  {
    id: "collapse",
    header: "",

    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "athlete",
    header: "Atleta",
  },
  {
    accessorKey: "total",
    cell: ({ row }) => (
      <Button variant="ghost" onClick={row.getToggleExpandedHandler()}>
        <ChevronsUpDown className="h-4 w-4" />
        <span className="">{row.original.total}</span>
      </Button>
    ),
    header: "Total",
  },
];
