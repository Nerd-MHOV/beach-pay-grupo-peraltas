"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  present: {
    label: "Presente",
    color: "hsl(var(--chart-1))",
  },
  absent: {
    label: "Faltas",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function LineChartStudent({
  chartData,
}: {
  chartData: {
    month: string;
    present: number;
    absent: number;
  }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Relação de Aulas</CardTitle>
        <CardDescription>
          {chartData[0].month} - {chartData[5].month} {new Date().getFullYear()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="present"
              type="monotone"
              stroke="var(--color-present)"
              strokeWidth={2}
              dot={true}
            />
            <Line
              dataKey="absent"
              type="monotone"
              stroke="var(--color-absent)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            {/* <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div> */}
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Presenças e Faltas dos últimos 6 meses
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
