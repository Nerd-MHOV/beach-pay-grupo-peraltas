"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Investment, InvestmentTournament } from "@beach-pay/database";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import DialogGroupInvestmentAthlete from "./dialog-investment-tournament";
import SelectComponentColumn from "@/components/tables/columns/selectColumn";
import { ExtendedColumnDef } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/tables/columns/sortingColumn";
import DashboardAthlete from "../../members/[id]/dashboard-athlete";
import DrawerMemberContents from "../../members/[id]/modals/drawer-member-contents";

type InvestmentColumns = ExtendedColumnDef<
  {
    investment_tournament_name?: string;
    athlete: string;
    investments: Investment[];
  } & InvestmentTournament,
  undefined
>;
export const columnsGroup: InvestmentColumns[] = [
  SelectComponentColumn as InvestmentColumns,
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Status"} />
    ),

    label: "Status",
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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Atleta"} />
    ),
    label: "Atleta",
  },
  {
    accessorKey: "investment_tournament_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Torneio"} />
    ),
    label: "Torneio",
  },
  {
    accessorKey: "value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Valor"} />
    ),
    label: "Valor",
    cell: ({ row }) => {
      const totalValue = row.original.investments.reduce(
        (acc, curr) => acc + curr.value,
        0,
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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Descrição"} />
    ),
    label: "Descrição",
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Criado Em:"} />
    ),
    label: "Criado Em:",
    cell: ({ row }) => {
      return <span>{format(row.original.created_at, "dd/MM/yy")}</span>;
    },
  },
  {
    id: "actions",
    label: " ",
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
            <DropdownMenuItem asChild>
              <DrawerMemberContents
                trigger={
                  <Button
                    variant="ghost"
                    className="w-full text-start justify-start cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Investimentos
                  </Button>
                }
                id={row.original.athlete_id}
                content={(member) => <DashboardAthlete athlete={member} />}
              />
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <DialogGroupInvestmentAthlete
                investmentTournament={row.original}
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
