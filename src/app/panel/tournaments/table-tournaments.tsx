"use client";

import LoadingData from "@/components/LoadingData";
import { DataTable } from "@/components/ui/data-table";
import { Tournament } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { columns } from "./columns";
import { getTournaments } from "./actions";

const TableTournaments = ({ tournaments }: { tournaments: Tournament[] }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["tournaments"],
    queryFn: getTournaments,
    initialData: tournaments,
  });

  if (isLoading) return <LoadingData message="Buscando Torneios" />;
  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TableTournaments;
