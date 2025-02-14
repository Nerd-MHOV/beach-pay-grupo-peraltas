import React from "react";
import { getAthleteById } from "./actions";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { format } from "date-fns";
import FormCreateAthlete from "../_forms/form-create-athlete";

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
              criado em: {format(athlete.createdAt, "dd/MM/yyyy HH:ii")}
            </span>
            <span className="text-sm text-gray-400">
              última atualização:{" "}
              {format(athlete.updatedAt, "dd/MM/yyyy HH:ii")}
            </span>
          </div>
        </Header.Content>
      </Header.Root>

      <div className="bg-white p-7 rounded-xl shadow-lg">
        <FormCreateAthlete athlete={athlete} />
      </div>
    </div>
  );
};

export default Page;
