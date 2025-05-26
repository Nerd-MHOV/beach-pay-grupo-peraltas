"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronsUpDown, FileUser } from "lucide-react";
import { Investment, InvestmentType } from "@beach-pay/database";
import SelectComponentColumn from "@/components/tables/columns/selectColumn";
import { ExtendedColumnDef } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/tables/columns/sortingColumn";
import Link from "next/link";

type dashboardColumnsDef = ExtendedColumnDef<
  {
    athlete_id: string;
    athlete: string;
    total: string;
    subRows: (Investment & { investment_type: InvestmentType })[] | undefined;
    pix_key: string;
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
  {
    accessorKey: "pix_key",
    cell: ({ row }) => (
      <Button variant="ghost" onClick={row.getToggleExpandedHandler()}>
        <span className="">{row.original.pix_key}</span>
      </Button>
    ),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Chave PIX" />
    ),
    label: "Chave PIX",
  },
  {
    id: "actions",
    enableHiding: false,
    label: " ",
    cell: ({ row }) => {
      return (
        <Link
          href={`/panel/members/${row.original.athlete_id}`}
          className={buttonVariants({
            variant: "ghost",
            className: "h-8 w-8",
          })}
        >
          <FileUser className="h-4 w-4" />
        </Link>
      );
    },
  },
];
