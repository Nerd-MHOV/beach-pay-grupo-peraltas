"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Investment, InvestmentGroup } from "@prisma/client";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import DialogGroupInvestmentAthlete from "./dialog-group-investment-athlete";
import SelectComponentColumn from "@/components/tables/columns/selectComponetColumn";

export interface InvestmentColumns {
  columns: {
    athlete: string;
    investments: Investment[];
  } & InvestmentGroup;
}
export const columnsGroup: ColumnDef<InvestmentColumns["columns"]>[] = [
  SelectComponentColumn as ColumnDef<InvestmentColumns["columns"]>,
  {
    header: "Status",
    accessorKey: "paid",
    cell: ({ row }) => {
      let paid = true;
      row.original.investments.forEach((investment) => {
        if (!investment.paid) {
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
      const totalValue = row.original.investments.reduce(
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

            <DropdownMenuItem asChild>
              <DialogGroupInvestmentAthlete
                investmentGroup={row.original}
                trigger={
                  <Button
                    variant="ghost"
                    className="w-full text-start justify-start cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Detalhes
                  </Button>
                }
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
