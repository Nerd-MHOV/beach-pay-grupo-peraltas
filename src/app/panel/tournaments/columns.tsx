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
import DialogCreateTournament from "./dialog-create-tournament";

export const columns: ColumnDef<
  Tournament & {
    arena: Arena;
    arena_name: string;
  }
>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    id: "arena_name",
    header: "Arena",
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
          {format(tournament.toDate, "dd LLL, y")}
        </span>
      );
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
            <DropdownMenuItem asChild>
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
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
