import React, { Suspense } from "react";
import { getMemberById } from "../actions";
import LoadingData from "@/components/LoadingData";
import { BarChartTeacherTimes } from "./charts/bar-chart-teacher-times";
import { PieChartTeacherLesson } from "./charts/pie-chart-teacher-lessons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";
import { getPointedData } from "./functions/get-pointeds";
import { getCountTiers } from "./functions/get-count-tiers";

const DashboardTeacher = ({
  member,
}: {
  member: NonNullable<Awaited<ReturnType<typeof getMemberById>>>;
}) => {
  const pointedData = getPointedData(member);
  const tiers = getCountTiers(member);
  return (
    <Suspense fallback={<LoadingData />}>
      <div className="grid gap-4 md:grid-cols-2 ">
        <BarChartTeacherTimes chartData={pointedData.sixMonth} />
        <div className="grid gap-4">
          <PieChartTeacherLesson data={tiers} />

          <Card className="bg-background border-none shadow-lg select-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Horas convertidas
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {pointedData.hours.converted}h
              </div>
              <p className="text-xs text-muted-foreground">Dando Aula</p>
            </CardContent>
          </Card>

          <Card className="bg-background border-none shadow-lg select-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Horas disponiveis
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {pointedData.hours.pointed}h
              </div>
              <p className="text-xs text-muted-foreground">Dando Aula</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Suspense>
  );
};

export default DashboardTeacher;
