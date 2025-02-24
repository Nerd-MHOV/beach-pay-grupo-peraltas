"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Investiment, InvestimentGroup } from "@prisma/client";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

export interface InvestimentColumns {
  columns: {
    athlete: string;
    investiments: Investiment[];
  } & InvestimentGroup;
}
export const columnsGroup: ColumnDef<InvestimentColumns["columns"]>[] = [
  {
    header: "Status",
    accessorKey: "paid",
    cell: ({ row }) => {
      let paid = true;
      row.original.investiments.forEach((investiment) => {
        if (!investiment.paid) {
          paid = false;
        }
      });
      return (
        <span
          className={
            paid
              ? "bg-green-200 text-green-800 px-2 py-1 rounded"
              : "bg-yellow-200 text-yellow-800 px-2 py-1 rounded"
          }
        >
          {paid ? "Pago" : "Pendente"}
        </span>
      );
    },
  },
  {
    accessorKey: "athlete",
    header: "Atleta",
  },
  {
    accessorKey: "value",
    header: "Valor",
    cell: ({ row }) => {
      const totalValue = row.original.investiments.reduce(
        (acc, curr) => acc + curr.value,
        0
      );
      return (
        <span>
          {Number(totalValue).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "createdAt",
    header: "Criado Em:",
    cell: ({ row }) => {
      return <span>{format(row.original.createdAt, "dd/MM/yy")}</span>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/panel/athletes/${row.original.athleteId}`}>
              <DropdownMenuItem>Atleta</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Detalhes</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
