"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Member } from "@prisma/client";
import { MoreHorizontal } from "lucide-react";
import DialogInvestmentAthlete from "../investments/(single)/dialog-investment-athlete";
import DialogGroupInvestmentAthlete from "../investments/(tournament)/dialog-investment-tournament";
import Link from "next/link";
import SelectComponentColumn from "@/components/tables/columns/selectColumn";
import { ExtendedColumnDef } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/tables/columns/sortingColumn";

export type MemberTable = Member & {
  age: number;
};

export const columns: ExtendedColumnDef<Member, undefined>[] = [
  SelectComponentColumn as ExtendedColumnDef<Member, undefined>,
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
      const member = row.original;

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
              onClick={() => navigator.clipboard.writeText(member.pix_key)}
            >
              Copy Chave PIX
            </DropdownMenuItem>
            {member.is_athlete && (
              <>
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
                    athlete={member}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <DialogInvestmentAthlete
                    athlete={member}
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
              </>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={`/panel/members/${member.id}`}>Detalhes</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
