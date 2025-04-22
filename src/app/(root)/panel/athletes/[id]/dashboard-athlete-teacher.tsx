import React, { Suspense } from "react";
import { getAthleteById } from "../actions";
import LoadingData from "@/components/LoadingData";

const DashboardAthleteTeacher = ({
  athlete,
}: {
  athlete: NonNullable<Awaited<ReturnType<typeof getAthleteById>>>;
}) => {
  return <Suspense fallback={<LoadingData />}>oi</Suspense>;
};

export default DashboardAthleteTeacher;
