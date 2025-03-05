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
import DialogCreateArena from "./dialog-create-arena";
import SelectComponentColumn from "@/components/tables/columns/selectComponetColumn";

export const columns: ColumnDef<Arena>[] = [
  SelectComponentColumn as ColumnDef<Arena>,
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
              <DialogCreateArena
                arena={row.original}
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
