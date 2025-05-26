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
  Member,
  Investment,
  InvestmentTournament,
  InvestmentType,
  Tournament,
} from "@beach-pay/database";
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
import DialogGroupInvestmentAthlete from "../(tournament)/dialog-investment-tournament";
import SelectComponentColumn from "@/components/tables/columns/selectColumn";
import { ExtendedColumnDef } from "@/components/ui/data-table";
import { DataTableColumnHeader } from "@/components/tables/columns/sortingColumn";
import DrawerMemberContents from "../../members/[id]/modals/drawer-member-contents";
import DashboardAthlete from "../../members/[id]/dashboard-athlete";

type InvestmentColumns = ExtendedColumnDef<
  {
    athlete_name: string;
    athlete: Member;
    investment_type: string;
    investment_tournament_name: string;
    investment_tournament:
      | ({
          pair: Member | null;
          tournament:
            | ({
                arena: Arena;
              } & Tournament)
            | null
            | undefined;
          investments: ({
            investment_type: InvestmentType;
          } & Investment)[];
        } & InvestmentTournament)
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
    accessorKey: "investment_type",
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
    accessorKey: "investment_tournament_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Torneio"} />
    ),
    label: "Torneio",
    cell: ({ row }) => {
      const investmentTournament = row.original.investment_tournament;
      if (!investmentTournament)
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
              <p className="flex items-center ">
                <CircleCheck className=" text-green-800 p-0.5 rounded" />
                {investmentTournament?.tournament?.name}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex flex-col gap-2">
                <span className="font-medium">
                  {investmentTournament.description}
                </span>

                <ul>
                  <li>
                    <b>Torneio:</b> {investmentTournament?.tournament?.name}
                  </li>
                  <li>
                    <b>Arena:</b> {investmentTournament?.tournament?.arena.name}
                  </li>
                  <li>
                    <b>KM:</b> {investmentTournament.km}
                  </li>
                  <li>
                    <b>Duplas:</b> {investmentTournament.pair_amount}
                  </li>
                  <li>
                    <b>Colocação:</b> {investmentTournament.podium}
                  </li>
                  <li>
                    <b>Dupla:</b> {investmentTournament?.pair?.name}
                  </li>
                </ul>
                <span className="font-medium mt-2">
                  <ol>
                    {investmentTournament.investments.map((investment) => (
                      <li key={investment.id}>
                        {investment.investment_type.name} -{" "}
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
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Criado Em"} />
    ),
    label: "Criado Em",
    cell: ({ row }) => {
      return <span>{format(row.original.created_at, "dd/MM/yy")}</span>;
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
            <DropdownMenuItem asChild>
              <DrawerMemberContents
                trigger={
                  <Button
                    variant="ghost"
                    className="w-full text-start justify-start cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Investimentos
                  </Button>
                }
                id={row.original.athlete_id}
                content={(member) => <DashboardAthlete athlete={member} />}
              />
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            {row.original.investment_tournament && (
              <DropdownMenuItem asChild>
                <DialogGroupInvestmentAthlete
                  investmentTournament={row.original.investment_tournament}
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
