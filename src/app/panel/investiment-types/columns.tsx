"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { InvestimentType } from "@prisma/client";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<InvestimentType>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "description",
    header: "Descrição",
    // cell: ({ row }) => {
    //   const description = row.original.description;
    //   const truncatedDescription =
    //     description.length > 40
    //       ? `${description.substring(0, 40)}...`
    //       : description;
    //   return <span>{truncatedDescription}</span>;
    // },
  },
  {
    accessorKey: "canSee",
    header: "Visível para",
    cell: ({ row }) => {
      const canSee = row.original.canSee;
      return <span>{canSee.join(", ")}</span>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({}) => {
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
