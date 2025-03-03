import { getDashboard } from "./actions";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "./overview";
import { TrendingUp } from "lucide-react";
import { format } from "date-fns";

const DefaultDashboard = async () => {
  const dashboard = await getDashboard();

  const TotalInvestments = Number(
    dashboard.totalInvestments.value
  ).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const TotalToPaid = Number(dashboard.pendingInvestments.value).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  );
  return (
    <div className=" space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            <p className="text-xs text-muted-foreground">
              Todos os investimentos
            </p>
          </CardContent>
        </Card>
        <Card className="bg-background border-none shadow-lg select-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inscrições</CardTitle>
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              +{dashboard.totalSubscriptions}
            </div>
            <p className="text-xs text-muted-foreground">
              Número de atletas cadastrados
            </p>
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
              +{dashboard.pendingInvestments.count}
            </div>
            <p className="text-xs text-muted-foreground">
              Sem confirm. de Pagamento
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-background  border-none shadow-lg">
          <CardHeader>
            <CardTitle>Visão Geral</CardTitle>
            <CardDescription className="uppercase">
              {dashboard.investmentsByMonth[0].month} -{" "}
              {
                dashboard.investmentsByMonth[
                  dashboard.investmentsByMonth.length - 1
                ].month
              }{" "}
              {new Date().getFullYear()}
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={dashboard.investmentsByMonth} />
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Investimento dos últimos {dashboard.investmentsByMonth.length}{" "}
              meses <TrendingUp className="h-4 w-4" />
            </div>
          </CardFooter>
        </Card>
        <Card className="col-span-4 md:col-span-3 bg-background border-none shadow-lg">
          <CardHeader>
            <CardTitle>Investimentos Recentes</CardTitle>
            <CardDescription>
              Você fez {dashboard.recentInvestments.investmentsLast30Days}{" "}
              investimentos nos últimos 30 dias.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {dashboard.recentInvestments.lastFiveInvestments.map(
                (investment) => {
                  return (
                    <div className="flex items-center" key={investment.id}>
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>
                          {investment.athlete.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {investment.athlete.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {format(investment.date, "dd-MM-yy")}
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        +
                        {investment.value.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DefaultDashboard;
