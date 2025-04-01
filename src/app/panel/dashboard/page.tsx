"use client";
import { Header } from "@/components/Header";
import React from "react";
import FormDownloadReport from "../form-download-report";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../actions";
import { SkeletonDefaultDashboard } from "../skeleton-default-dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import ChartPerTypeInvestment from "@/components/charts/chart-per-type-investment";
import TableDashboard from "./table-dashboard";

const Dashboard = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from")
    ? new Date(searchParams.get("from")!)
    : null;
  const to = searchParams.get("to") ? new Date(searchParams.get("to")!) : null;
  const date = from && to ? { from, to } : undefined;
  const { data: dashboard, isPending } = useQuery({
    queryKey: ["dashboard", date],
    queryFn: async () => await getDashboard({ date }),
  });

  const TotalInvestments = Number(
    dashboard?.totalInvestments.value
  ).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className="px-2 sm:px-10 py-3 mb-20 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>
          Dashboard{" "}
          {date?.from &&
            date.to &&
            `-  ${format(date?.from, "dd / MMM")} à ${format(
              date?.to,
              "dd / MMM"
            )}`}
        </Header.Title>
        <Header.Content>
          <FormDownloadReport />
        </Header.Content>
      </Header.Root>

      {isPending ? (
        <SkeletonDefaultDashboard />
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-2">
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
                  {date?.from && date?.to
                    ? `de ${format(date?.from, "dd / MMM")} à ${format(
                        date?.to,
                        "dd / MMM"
                      )}`
                    : "Todos os investimentos"}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-lg select-none">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Número de investimentos
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  +{dashboard?.totalInvestments.count}
                </div>
                <p className="text-xs text-muted-foreground">
                  {date?.from && date?.to
                    ? `de ${format(date?.from, "dd / MMM")} à ${format(
                        date?.to,
                        "dd / MMM"
                      )}`
                    : "Todos os investimentos"}
                </p>
              </CardContent>
            </Card>
          </div>
          <ChartPerTypeInvestment
            description={
              date?.from && date?.to
                ? `de ${format(date?.from, "dd / MMM")} até ${format(
                    date?.to,
                    "dd / MMM"
                  )}`
                : "Todos os investimentos"
            }
            data={dashboard?.investmentByType || []}
          />

          <TableDashboard
            data={dashboard?.investmentByAthlete}
            pdfDescription={
              date?.from &&
              date.to &&
              `${format(date?.from, "dd / MMM")} à ${format(
                date?.to,
                "dd / MMM"
              )}`
            }
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
