"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Arena,
  Athlete,
  Investment,
  InvestmentGroup,
  InvestmentType,
  Tournament,
} from "@prisma/client";
import { format } from "date-fns";
import { CircleCheck, CircleMinus, MoreHorizontal } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DialogInvestmentAthlete from "./dialog-investment-athlete";
import Link from "next/link";
import DialogGroupInvestmentAthlete from "../(group)/dialog-group-investment-athlete";
import SelectComponentColumn from "@/components/tables/columns/selectColumn";
import { ExtendedColumnDef } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/tables/columns/sortingColumn";

type InvestmentColumns = ExtendedColumnDef<
  {
    athlete_name: string;
    athlete: Athlete;
    investmentType: string;
    investmentGroup:
      | ({
          pair: Athlete | null;
          tournament:
            | ({
                arena: Arena;
              } & Tournament)
            | null;
          investments: ({
            investmentType: InvestmentType;
          } & Investment)[];
        } & InvestmentGroup)
      | null;
  } & Investment,
  undefined
>;
export const columns: InvestmentColumns[] = [
  SelectComponentColumn as InvestmentColumns,
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Status"} />
    ),
    accessorKey: "paid",
    label: "Status",
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
    accessorKey: "athlete_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Atleta"} />
    ),
    label: "Atleta",
  },
  {
    accessorKey: "investmentType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Tipo de Investimento"} />
    ),
    label: "Tipo de Investimento",
  },
  {
    accessorKey: "value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Valor"} />
    ),
    label: "Valor",
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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Descrição"} />
    ),
    label: "Descrição",
  },
  {
    accessorKey: "investmentGroup",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Grupo"} />
    ),
    label: "Grupo",
    cell: ({ row }) => {
      const investmentGroup = row.original.investmentGroup;
      if (!investmentGroup)
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
                  {investmentGroup.description}
                </span>

                <ul>
                  <li>
                    <b>Torneio:</b> {investmentGroup?.tournament?.name}
                  </li>
                  <li>
                    <b>Arena:</b> {investmentGroup?.tournament?.arena.name}
                  </li>
                  <li>
                    <b>KM:</b> {investmentGroup.km}
                  </li>
                  <li>
                    <b>Duplas:</b> {investmentGroup.pairAmount}
                  </li>
                  <li>
                    <b>Colocação:</b> {investmentGroup.podium}
                  </li>
                  <li>
                    <b>Dupla:</b> {investmentGroup?.pair?.name}
                  </li>
                </ul>
                <span className="font-medium mt-2">
                  <ol>
                    {investmentGroup.investments.map((investment) => (
                      <li key={investment.id}>
                        {investment.investmentType.name} -{" "}
                        {Number(investment.value).toLocaleString("pt-BR", {
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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Data"} />
    ),
    label: "Data",
    cell: ({ row }) => {
      return <span>{format(row.original.date, "dd/MM/yy")}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Criado Em"} />
    ),
    label: "Criado Em",
    cell: ({ row }) => {
      return <span>{format(row.original.createdAt, "dd/MM/yy")}</span>;
    },
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
            <Link href={`/panel/athletes/${row.original.athleteId}`}>
              <DropdownMenuItem>Atleta</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />

            {row.original.investmentGroup && (
              <DropdownMenuItem asChild>
                <DialogGroupInvestmentAthlete
                  investmentGroup={row.original.investmentGroup}
                  trigger={
                    <Button
                      variant="ghost"
                      className="w-full text-start justify-start cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0"
                    >
                      Detalhes do Grupo
                    </Button>
                  }
                />
              </DropdownMenuItem>
            )}
            <DropdownMenuItem asChild>
              <DialogInvestmentAthlete
                investment={row.original}
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
