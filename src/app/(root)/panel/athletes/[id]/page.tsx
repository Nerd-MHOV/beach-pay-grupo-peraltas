import React from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { format } from "date-fns";
import FormAthlete from "../form/form-athlete";
import DialogDeleteAthlete from "./dialog-delete-athlete";
import { getAthleteById } from "../actions";
import DashboardAthleteInvestments from "./dashboard-athlete-investments";
import { Separator } from "@/components/ui/separator";

const Page = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const athlete = await getAthleteById((await params).id);

  if (!athlete) {
    return notFound();
  }

  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title subtitle={athlete.responsible ?? undefined}>
          {athlete.name}
        </Header.Title>
        <Header.Content>
          <div className="flex flex-col justify-end items-end space-x-2">
            <span className="text-sm text-gray-400">
              criado em: {format(athlete.created_at, "dd/MM/yyyy HH:ii")}
            </span>
            <span className="text-sm text-gray-400">
              última atualização:{" "}
              {format(athlete.updated_at, "dd/MM/yyyy HH:ii")}
            </span>
          </div>
        </Header.Content>
      </Header.Root>

      <DashboardAthleteInvestments athlete={athlete} />

      <Separator className="my-8" />

      <div className="bg-white p-7 rounded-xl shadow-lg">
        <FormAthlete athlete={athlete} />
      </div>

      <div className="flex w-full items-end justify-end mt-20 mb-5 pr-5">
        <DialogDeleteAthlete athlete={athlete} />
      </div>
    </div>
  );
};

export default Page;
