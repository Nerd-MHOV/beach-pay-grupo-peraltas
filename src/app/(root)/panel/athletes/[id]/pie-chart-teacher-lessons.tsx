"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartConfig = {
  lessons: {
    label: "lessons",
  },
  tier_a: {
    label: "A",
    color: "hsl(var(--chart-1))",
  },
  tier_b: {
    label: "B",
    color: "hsl(var(--chart-2))",
  },
  tier_c: {
    label: "C",
    color: "hsl(var(--chart-3))",
  },
  tier_d: {
    label: "D",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function PieChartTeacherLesson({
  data,
}: {
  data: { tier: string; count: number }[];
}) {
  const lessonData = [
    {
      tier: "tier_a",
      lesson: data.find((dt) => dt.tier === "A")?.count || 0,
      fill: "var(--color-tier_a)",
    },
    {
      tier: "tier_b",
      lesson: data.find((dt) => dt.tier === "B")?.count || 0,
      fill: "var(--color-tier_b)",
    },
    {
      tier: "tier_c",
      lesson: data.find((dt) => dt.tier === "C")?.count || 0,
      fill: "var(--color-tier_c)",
    },
    {
      tier: "tier_d",
      lesson: data.find((dt) => dt.tier === "D")?.count || 0,
      fill: "var(--color-tier_d)",
    },
  ];

  const id = "pie-interactive";
  const [activeTier, setActiveTier] = React.useState(lessonData[0].tier);

  const activeIndex = React.useMemo(
    () => lessonData.findIndex((item) => item.tier === activeTier),
    [activeTier]
  );
  const tiers = React.useMemo(() => lessonData.map((item) => item.tier), []);

  return (
    <Card
      data-chart={id}
      className="flex flex-col bg-background border-none shadow-lg select-none"
    >
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Aulas por Categoria</CardTitle>
          <CardDescription></CardDescription>
        </div>
        <Select value={activeTier} onValueChange={setActiveTier}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select tier" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {tiers.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];

              if (!config) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={lessonData}
              dataKey="lesson"
              nameKey="tier"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {lessonData[activeIndex].lesson.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Aulas
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
