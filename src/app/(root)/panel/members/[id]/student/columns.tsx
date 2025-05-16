"use client";

import SelectComponentColumn from "@/components/tables/columns/selectColumn";
import { ExtendedColumnDef } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/tables/columns/sortingColumn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import DialogLesson from "./dialog-lesson";
import { Lesson } from "@prisma/client";

const StatusLessonColumnsObject = {
  Feita: "bg-green-200 text-green-800",
  Agendada: "bg-yellow-200 text-yellow-800",
  "Sem Justificativa": "bg-red-200 text-red-800",
  "Com Justificativa": "bg-orange-200 text-orange-800",
  Indefinido: "bg-gray-200 text-gray-800",
} as const;
export type StatusLessonColumns = keyof typeof StatusLessonColumnsObject;
export type StudentColumns = {
  id: string;
  status: StatusLessonColumns;
  time_start: string;
  teacher: {
    name: string;
  };
  tier: string;
  reson: string;
  lesson: Lesson;
};
export const columns: ExtendedColumnDef<StudentColumns, undefined>[] = [
  SelectComponentColumn as ExtendedColumnDef<StudentColumns, undefined>,
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const styleRow = StatusLessonColumnsObject[row.original.status];
      return (
        <span className={cn(styleRow, "py-1 px-2 rounded")}>
          {row.original.status}
        </span>
      );
    },
    accessorKey: "status",
    label: "Status",
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data" />
    ),
    accessorKey: "time_start",
    label: "Data",
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Professor" />
    ),
    accessorKey: "teacher.name",
    label: "Professor",
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Classificação" />
    ),
    accessorKey: "tier",
    label: "Classificação",
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Motivo" />
    ),
    accessorKey: "reson",
    label: "Motivo",
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
              <DialogLesson
                lesson={row.original.lesson}
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
