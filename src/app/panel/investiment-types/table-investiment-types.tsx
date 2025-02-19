"use client";

import { InvestimentType } from "@prisma/client";
import { getInvestimentsType } from "./actions";
import LoadingData from "@/components/LoadingData";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";

const TableInvestimentTypes = ({
  invetiments,
}: {
  invetiments: InvestimentType[];
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["investiment-types"],
    queryFn: getInvestimentsType,
    initialData: invetiments,
  });

  if (isLoading) return <LoadingData message="Buscando Investimentos" />;

  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TableInvestimentTypes;
