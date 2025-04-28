import React, { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RadarChartAthlete from "./charts/radar-chart-athlete";
import TableRoot from "../../investments/table-root";
import LoadingData from "@/components/LoadingData";
import { getAthleteById } from "../actions";

const DashboardAthleteInvestments = ({
  athlete,
}: {
  athlete: NonNullable<Awaited<ReturnType<typeof getAthleteById>>>;
}) => {
  const TotalInvestments = Number(
    athlete.investments.reduce((acc, curr) => acc + curr.value, 0)
  ).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const pendingInvestments = athlete.investments.filter(
    (investment) => !investment.paid
  );

  const TotalToPaid = Number(
    pendingInvestments.reduce((acc, curr) => acc + curr.value, 0)
  ).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const investmentsByType = athlete.investments.reduce((acc, curr) => {
    const name = curr.investment_type.name;
    if (!acc[name]) {
      acc[name] = 0;
    }
    acc[name] += curr.value;
    return acc;
  }, {} as Record<string, number>);

  const investmentsArray = Object.entries(investmentsByType).map(
    ([name, value]) => ({
      label: name,
      investment: value,
    })
  );

  return (
    <Suspense fallback={<LoadingData message="Buscando Investimentos" />}>
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

      <TableRoot
        investments={athlete.investments}
        investmentGroup={athlete.investment_group_athlete}
        athlete={athlete}
      />
    </Suspense>
  );
};

export default DashboardAthleteInvestments;
