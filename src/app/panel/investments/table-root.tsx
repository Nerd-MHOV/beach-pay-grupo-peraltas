"use client";
import { Athlete } from "@prisma/client";
import DialogInvestmentAthlete from "./(single)/dialog-investment-athlete";
import DialogGroupInvestmentAthlete from "./(group)/dialog-group-investment-athlete";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import TableGroupInvestments from "./(group)/table-group-investments";
import { getGroupInvestments, getInvestments } from "./actions";
import TableInvestments from "./(single)/table-investments";

const TableRoot = ({
  athlete,
  groupInvestments,
  investments,
}: {
  athlete?: Athlete;
  groupInvestments: Awaited<ReturnType<typeof getGroupInvestments>>;
  investments: Awaited<ReturnType<typeof getInvestments>>;
}) => {
  const [showGroup, setShowGroup] = useState<boolean>(false);
  const description = athlete ? `Investimentos em ${athlete.name}` : undefined;
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
        <TableGroupInvestments
          pdfDescription={description}
          groupInvestments={groupInvestments}
        />
      ) : (
        <TableInvestments
          pdfDescription={description}
          investments={investments}
        />
      )}
    </div>
  );
};

export default TableRoot;
