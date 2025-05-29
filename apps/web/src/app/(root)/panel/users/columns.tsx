"use client";

import { User } from "@beach-pay/database";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import DialogCreateUser from "./dialog-user";
import SelectComponentColumn from "@/components/tables/columns/selectColumn";
import { DataTableColumnHeader } from "@/components/tables/columns/sortingColumn";
import { ExtendedColumnDef } from "@/components/ui/data-table";

type UserWithoutPassword = Omit<User, "passwd" | "hashed_refresh_token">;
export const columns: ExtendedColumnDef<UserWithoutPassword, undefined>[] = [
  SelectComponentColumn as ExtendedColumnDef<UserWithoutPassword, undefined>,
  {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Nome" />,
    accessorKey: "name",
    label: "Nome",
  },
  {
    header: ({ column }) => <DataTableColumnHeader column={column} title="E-mail" />,
    accessorKey: "email",
    label: "E-mail",
  },
  {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Nivel" />,
    accessorKey: "role",
    label: "Nivel",
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
              <DialogCreateUser
                user={row.original}
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
