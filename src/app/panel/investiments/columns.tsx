"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Investiment, InvestimentGroup, InvestimentType } from "@prisma/client";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { CircleCheck, CircleMinus, MoreHorizontal } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const columns: ColumnDef<
  {
    athlete: string;
    investimentType: string;
    investimentGroup:
      | ({
          investiments: ({
            investimentType: InvestimentType;
          } & Investiment)[];
        } & InvestimentGroup)
      | null;
  } & Investiment
>[] = [
  {
    header: "Status",
    accessorKey: "paid",
    cell: ({ row }) => {
      return (
        <span
          className={
            row.original.paid
              ? "bg-green-200 text-green-800 px-2 py-1 rounded"
              : "bg-yellow-200 text-yellow-800 px-2 py-1 rounded"
          }
        >
          {row.original.paid ? "Pago" : "Pendente"}
        </span>
      );
    },
  },
  {
    accessorKey: "athlete",
    header: "Atleta",
  },
  {
    accessorKey: "investimentType",
    header: "Tipo",
  },
  {
    accessorKey: "value",
    header: "Valor",
    cell: ({ row }) => {
      return (
        <span>
          {Number(row.original.value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "investimentGroup",
    header: "Grupo",
    cell: ({ row }) => {
      const investimentGroup = row.original.investimentGroup;
      if (!investimentGroup)
        return (
          <span>
            <CircleMinus className=" text-yellow-800 p-0.5 rounded" />
          </span>
        );
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <span>
                <CircleCheck className=" text-green-800 p-0.5 rounded" />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex flex-col gap-2">
                <span className="font-medium">
                  {investimentGroup.description}
                </span>
                <span className="font-medium mt-2">
                  <ol>
                    {investimentGroup.investiments.map((investiment) => (
                      <li key={investiment.id}>
                        {investiment.investimentType.name} -{" "}
                        {Number(investiment.value).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </li>
                    ))}
                  </ol>
                </span>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Data do investimento",
    cell: ({ row }) => {
      return <span>{format(row.original.date, "dd/MM/yy")}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Criado Em:",
    cell: ({ row }) => {
      return <span>{format(row.original.createdAt, "dd/MM/yy")}</span>;
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
