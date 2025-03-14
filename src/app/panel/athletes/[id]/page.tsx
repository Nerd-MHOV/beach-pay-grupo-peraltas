import React from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { format } from "date-fns";
import FormCreateAthlete from "../form/form-create-athlete";
import DialogDeleteAthlete from "./dialog-delete-athlete";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RadarChartAthlete from "./radar-chart-athlete";
import TableRoot from "../../investments/table-root";
import { getAthleteById } from "../actions";

const Page = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const athlete = await getAthleteById((await params).id);

  if (!athlete) {
    return notFound();
  }

  const TotalInvestments = Number(
    athlete.investments.reduce((acc, curr) => acc + curr.value, 0),
  ).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const pendingInvestments = athlete.investments.filter(
    (investment) => !investment.proof,
  );

  const TotalToPaid = Number(
    pendingInvestments.reduce((acc, curr) => acc + curr.value, 0),
  ).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const investmentsByType = athlete.investments.reduce(
    (acc, curr) => {
      const name = curr.investmentType.name;
      if (!acc[name]) {
        acc[name] = 0;
      }
      acc[name] += curr.value;
      return acc;
    },
    {} as Record<string, number>,
  );

  const investmentsArray = Object.entries(investmentsByType).map(
    ([name, value]) => ({
      label: name,
      investment: value,
    }),
  );
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title subtitle={athlete.responsible ?? undefined}>
          {athlete.name}
        </Header.Title>
        <Header.Content>
          <div className="flex flex-col justify-end items-end space-x-2">
            <span className="text-sm text-gray-400">
              criado em: {format(athlete.createdAt, "dd/MM/yyyy HH:ii")}
            </span>
            <span className="text-sm text-gray-400">
              última atualização:{" "}
              {format(athlete.updatedAt, "dd/MM/yyyy HH:ii")}
            </span>
          </div>
        </Header.Content>
      </Header.Root>

      <div className="grid gap-4 md:grid-cols-2 ">
        <RadarChartAthlete chartData={investmentsArray} />
        <div className="grid gap-4">
          <Card className="bg-background border-none shadow-lg select-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Investido
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{TotalInvestments}</div>
              <p className="text-xs text-muted-foreground">No Atleta</p>
            </CardContent>
          </Card>

          <Card className="bg-background border-none shadow-lg select-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">A pagar</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{TotalToPaid}</div>
              <p className="text-xs text-muted-foreground">
                Sem confirm. de Pagamento
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-none shadow-lg select-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                +{pendingInvestments.length}
              </div>
              <p className="text-xs text-muted-foreground">
                Sem confirm. de Pagamento
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="">
        <TableRoot
          investments={athlete.investments}
          groupInvestments={athlete.investment_group_athlete}
          athlete={athlete}
        />
      </div>

      <div className="bg-white p-7 rounded-xl shadow-lg">
        <FormCreateAthlete athlete={athlete} />
      </div>

      <div className="flex w-full items-end justify-end mt-20 mb-5 pr-5">
        <DialogDeleteAthlete athlete={athlete} />
      </div>
    </div>
  );
};

export default Page;
