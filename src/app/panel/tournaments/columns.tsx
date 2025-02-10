"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Arena, Tournament } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<
  Tournament & {
    arena: Arena;
  }
>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    id: "arena",
    header: "Arena",
    cell: ({ row }) => {
      const tournament = row.original;
      return <span>{tournament.arena.name}</span>;
    },
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    id: "date",
    header: "Data",
    cell: ({ row }) => {
      const tournament = row.original;
      return (
        <span>
          {format(tournament.fromDate, "dd LLL")} -{" "}
          {format(tournament.toDate, "dd LLL, Y")}
        </span>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const tournament = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Detalhes</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
