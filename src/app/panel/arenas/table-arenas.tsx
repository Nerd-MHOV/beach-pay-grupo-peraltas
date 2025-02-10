"use client";
import { Arena } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getArenas } from "./actions";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import LoadingData from "@/components/LoadingData";

const TableArenas = ({ arenas }: { arenas: Arena[] }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["arenas"],
    queryFn: getArenas,
    initialData: arenas,
  });

  if (isLoading) return <LoadingData message="Buscando Arenas" />;
  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TableArenas;
