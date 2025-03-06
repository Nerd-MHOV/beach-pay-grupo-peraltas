"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Athlete } from "@prisma/client";
import { MoreHorizontal } from "lucide-react";
import DialogInvestmentAthlete from "../investments/(single)/dialog-investment-athlete";
import DialogGroupInvestmentAthlete from "../investments/(group)/dialog-group-investment-athlete";
import Link from "next/link";
import SelectComponentColumn from "@/components/tables/columns/selectColumn";
import { ExtendedColumnDef } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/tables/columns/sortingColumn";

export type AthleteTable = Athlete & {
  age: number;
};

export const columns: ExtendedColumnDef<Athlete, undefined>[] = [
  SelectComponentColumn as ExtendedColumnDef<Athlete, undefined>,
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    label: "Nome",
  },
  {
    accessorKey: "responsible",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Responsável" />
    ),
    label: "Responsável",
  },
  {
    accessorKey: "age",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Idade" />
    ),
    label: "Idade",
  },
  {
    id: "actions",
    enableHiding: false,
    label: " ",
    cell: ({ row }) => {
      const athlete = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(athlete.pixKey)}
            >
              Copy Chave PIX
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <DialogGroupInvestmentAthlete
                trigger={
                  <Button
                    variant="ghost"
                    className="w-full text-start justify-start cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Declarar Grupo de Investimento
                  </Button>
                }
                athlete={athlete}
              />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <DialogInvestmentAthlete
                athlete={athlete}
                trigger={
                  <Button
                    variant="ghost"
                    className="w-full text-start justify-start cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Declarar Investimento
                  </Button>
                }
              />
            </DropdownMenuItem>
            <DropdownMenuItem asChild></DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/panel/athletes/${athlete.id}`}>Detalhes</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
