"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  converted: {
    label: "convertido",
    color: "hsl(var(--chart-1))",
  },
  pointed: {
    label: "apontado",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

interface BarChartTeacherTimesProps {
  chartData: {
    month: string;
    pointed: number;
    converted: number;
  }[];
}

export function BarChartTeacherTimes({
  chartData = [],
}: BarChartTeacherTimesProps) {
  const totalPointed = chartData.reduce((sum, data) => sum + data.pointed, 0);
  const totalConverted = chartData.reduce(
    (sum, data) => sum + data.converted,
    0
  );
  const totalConvertedPercentage = (
    (totalConverted / totalPointed) * 100 || 0
  ).toFixed(2);
  return (
    <Card className="bg-background border-none shadow-lg select-none">
      <CardHeader>
        <CardTitle>Relação de horas apontadas e convertidas</CardTitle>
        <CardDescription>
          {chartData[0].month} - {chartData[5].month} {new Date().getFullYear()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="converted"
              stackId="a"
              fill="var(--color-converted)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="pointed"
              stackId="a"
              fill="var(--color-pointed)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Nos últimos meses {totalConvertedPercentage}% do tempo foi convertido{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Horas convertidas nos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  );
}
