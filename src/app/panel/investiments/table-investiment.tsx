"use client";

import { Athlete } from "@prisma/client";
import LoadingData from "@/components/LoadingData";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { getGroupInvestiments, getInvestiments } from "./actions";
import DialogInvestmentAthlete from "../athletes/_dialogs/dialog-investment-athlete";
import DialogGroupInvestmentAthlete from "../athletes/_dialogs/dialog-group-investment-athlete";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { columnsGroup } from "./columns-group";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const TableInvestiments = ({
  invetiments,
  groupInvestiments,
  athlete,
}: {
  invetiments: Awaited<ReturnType<typeof getInvestiments>>;
  groupInvestiments: Awaited<ReturnType<typeof getGroupInvestiments>>;
  athlete?: Athlete;
}) => {
  const [showGroup, setShowGroup] = useState(false);
  const queryKey = athlete
    ? ["investiment-list-athlete", athlete.id]
    : ["investiments"];
  const { data, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: getInvestiments,
    initialData: invetiments,
  });

  const queryGroupKey = athlete
    ? ["group-investiment-list-athlete", athlete.id]
    : ["group-investiments"];
  const { data: dataGroup, isLoading: isLoadingGroup } = useQuery({
    queryKey: queryGroupKey,
    queryFn: getGroupInvestiments,
    initialData: groupInvestiments,
  });
  if (isLoading || isLoadingGroup)
    return <LoadingData message="Buscando Investimentos" />;

  return (
    <div className="bg-white p-7 rounded-xl shadow-lg overflow-auto">
      <div className="flex gap-1 flex-wrap justify-center sm:justify-normal">
        <DialogInvestmentAthlete
          trigger={
            <Button size="sm" variant="ghost">
              <Plus /> Novo Investimento
            </Button>
          }
          athlete={athlete}
        />
        <DialogGroupInvestmentAthlete
          trigger={
            <Button size="sm" variant="ghost">
              <Plus /> Novo Grupo de Investimento
            </Button>
          }
          athlete={athlete}
        />
        <div className="flex items-center space-x-2">
          <Label htmlFor="table-mode">Único</Label>
          <Switch
            id="table-mode"
            onCheckedChange={setShowGroup}
            checked={showGroup}
          />
          <Label htmlFor="table-mode">Grupo</Label>
        </div>
      </div>

      {showGroup ? (
        <DataTable
          columns={columnsGroup}
          data={dataGroup.map((group) => ({
            ...group,
            athlete: group.athlete.name,
          }))}
        />
      ) : (
        <DataTable
          columns={columns}
          data={data.map((investiment) => {
            return {
              ...investiment,
              athlete_name: investiment.athlete.name,
              investimentType: investiment.investimentType.name,
            };
          })}
        />
      )}
    </div>
  );
};

export default TableInvestiments;
