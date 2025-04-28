import React, { Suspense } from "react";
import { getAthleteById } from "../actions";
import LoadingData from "@/components/LoadingData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, ListChecks, Ban, CircleSlash } from "lucide-react";
import { LineChartStudent } from "./charts/line-chart-student";
import { getPresence } from "./functions/get-presence";

const DashboardAthleteStudent = ({
  athlete,
}: {
  athlete: NonNullable<Awaited<ReturnType<typeof getAthleteById>>>;
}) => {
  const presence = getPresence(athlete);
  return (
    <Suspense fallback={<LoadingData />}>
      <div className="grid gap-4 md:grid-cols-2 ">
        <div className="grid gap-4">
          <Card className="bg-background border-none shadow-lg select-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aulas</CardTitle>
              <ListChecks className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {presence.lessons.completedLessons}
              </div>
              <p className="text-xs text-muted-foreground">feitas</p>
            </CardContent>
          </Card>

          <Card className="bg-background border-none shadow-lg select-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aulas</CardTitle>
              <CalendarClock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {presence.lessons.pendingLessons}
              </div>
              <p className="text-xs text-muted-foreground">pendentes</p>
            </CardContent>
          </Card>

          <Card className="bg-background border-none shadow-lg select-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faltas</CardTitle>
              <Ban className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {presence.lessons.absencesWithJustification}
              </div>
              <p className="text-xs text-muted-foreground">Sem justificativa</p>
            </CardContent>
          </Card>

          <Card className="bg-background border-none shadow-lg select-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faltas</CardTitle>
              <CircleSlash className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {presence.lessons.absencesWithoutJustification}
              </div>
              <p className="text-xs text-muted-foreground">Com justificativa</p>
            </CardContent>
          </Card>
        </div>
        <LineChartStudent chartData={presence.sixMonths} />
      </div>
    </Suspense>
  );
};

export default DashboardAthleteStudent;
