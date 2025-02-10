"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Arena } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
export const columns: ColumnDef<Arena>[] = [
  {
    header: "Nome",
    accessorKey: "name",
  },
  {
    header: "Cidade",
    accessorKey: "city",
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
