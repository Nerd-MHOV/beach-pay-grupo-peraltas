"use client";

import {
  Athlete,
  Investiment,
  InvestimentGroup,
  InvestimentType,
} from "@prisma/client";
import LoadingData from "@/components/LoadingData";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { getInvestiments } from "./actions";
import DialogInvestmentAthlete from "../athletes/_dialogs/dialog-investment-athlete";
import DialogGroupInvestmentAthlete from "../athletes/_dialogs/dialog-group-investment-athlete";

const TableInvestiments = ({
  invetiments,
  athlete,
  actions = false,
}: {
  invetiments: ({
    athlete: Athlete;
    investimentType: InvestimentType;
    investimentGroup:
      | ({
          investiments: ({
            investimentType: InvestimentType;
          } & Investiment)[];
        } & InvestimentGroup)
      | null;
  } & Investiment)[];
  athlete?: Athlete;
  actions?: boolean;
}) => {
  const queryKey = athlete ? "investiment-list-athlete" : "investiments";
  const { data, isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: getInvestiments,
    initialData: invetiments,
  });

  if (isLoading) return <LoadingData message="Buscando Investimentos" />;

  return (
    <div className="bg-white p-7 rounded-xl shadow-lg overflow-auto">
      {actions && (
        <div>
          <DialogInvestmentAthlete combobox athlete={athlete} />
          <DialogGroupInvestmentAthlete combobox athlete={athlete} />
        </div>
      )}
      <DataTable
        columns={columns}
        data={data.map((investiment) => {
          return {
            ...investiment,
            athlete: investiment.athlete.name,
            investimentType: investiment.investimentType.name,
          };
        })}
      />
    </div>
  );
};

export default TableInvestiments;
