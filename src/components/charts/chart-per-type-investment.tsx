"use client";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
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
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const chartConfig = {
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

const ChartPerTypeInvestment = ({
  data,
  description = "",
}: {
  data: {
    type: string;
    value: number;
    count: number;
  }[];
  description?: string;
}) => {
  return (
    <Card className="bg-background border-none shadow-lg select-none">
      <CardHeader>
        <CardTitle>Por Tipo de Investimento</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className={cn(`w-full`, {
            "h-64": data.length < 5,
          })}
        >
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="type"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={({ active, payload }: TooltipProps<number, string>) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload as {
                    type: string;
                    value: number;
                    count: number;
                  };
                  return (
                    <div className="flex gap-2 bg-white p-2 border rounded shadow [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-black">
                      <div
                        className={cn(
                          " w-1 h-auto shrink-0 rounded-[2px] border-primary bg-primary"
                        )}
                      />
                      <div>
                        <p className="font-bold text-sm">{data.type}</p>
                        <div className="flex gap-1">
                          <span className="flex-1 text-gray-500">
                            Ocorrências:
                          </span>
                          <span>{data.count}</span>
                        </div>
                        <div className="flex gap-1">
                          <span className="flex-1 text-gray-500">Reais:</span>
                          <span>
                            {data.value.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="value"
              layout="vertical"
              fill="currentColor"
              className="fill-primary"
              radius={4}
            >
              <LabelList
                dataKey="type"
                position="insideLeft"
                offset={8}
                className="fill-white"
                fontSize={12}
              />
              <LabelList
                dataKey="value"
                position="right"
                formatter={(value: number) =>
                  value.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })
                }
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Entenda no que seu dinheiro esta sendo investido.
          <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChartPerTypeInvestment;
