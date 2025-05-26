"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Arena, Tournament } from "@beach-pay/database";
import { MoreHorizontal } from "lucide-react";
import SelectComponentColumn from "@/components/tables/columns/selectColumn";
import { ExtendedColumnDef } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/tables/columns/sortingColumn";
import Link from "next/link";

type tournamentsColumnsDef = ExtendedColumnDef<
  Tournament & {
    arena: Arena;
    arena_name: string;
    date: string;
  },
  undefined
>;
export const columns: tournamentsColumnsDef[] = [
  SelectComponentColumn as tournamentsColumnsDef,
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    label: "Nome",
  },
  {
    accessorKey: "arena_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Arena" />
    ),
    label: "Arena",
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrição" />
    ),
    label: "Descrição",
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data" />
    ),
    label: "Data",
  },
  {
    id: "actions",
    enableHiding: false,
    label: " ",
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
              {/*
                    <DialogCreateTournament
                tournament={row.original}
                trigger={
                  <Button
                    variant="ghost"
                    className="w-full text-start justify-start cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Detalhes
                  </Button>
                }
              />
              */}
              <Link href={`/panel/tournaments/${row.original.id}`}>
                Detalhes
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
