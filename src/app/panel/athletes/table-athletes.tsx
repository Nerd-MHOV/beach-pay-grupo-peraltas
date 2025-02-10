"use client";
import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./columns";
import { Athlete } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { getAthletes } from "./actions";
import LoadingData from "@/components/LoadingData";

const TableAthletes = ({ athletes }: { athletes: Athlete[] }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["athletes"],
    queryFn: getAthletes,
    initialData: athletes,
  });
  if (isLoading) return <LoadingData message="Buscando Atletas" />;
  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TableAthletes;
