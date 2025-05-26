/* eslint-disable react/no-unescaped-entities */
"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function RadarChartAthlete({
  chartData = [],
}: {
  chartData: { label: string; investment: number }[];
}) {
  const maxInvestmentData = chartData.reduce(
    (prev, current) => (prev.investment > current.investment ? prev : current),
    { investment: 0, label: "" }
  );
  const maxInvestment = maxInvestmentData.investment;
  const maxInvestmentLabel = maxInvestmentData.label;
  const totalInvestment = chartData.reduce(
    (sum, data) => sum + data.investment,
    0
  );
  const maxInvestmentPercentage = (
    (maxInvestment / totalInvestment) *
    100
  ).toFixed(2);
  return (
    <Card className="bg-background border-none shadow-lg select-none">
      <CardHeader className="items-center pb-4">
        <CardTitle>Areas de Investimento</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="label" />
            <PolarGrid />
            <Radar
              dataKey="investment"
              fill="currentColor"
              className="fill-primary"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {maxInvestmentPercentage}% dos invest. são em "{maxInvestmentLabel}"
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Entenda melhor onde seu dinheiro está sendo investido
        </div>
      </CardFooter>
    </Card>
  );
}
