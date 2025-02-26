"use client";
import { Athlete } from "@prisma/client";
import DialogInvestmentAthlete from "../athletes/_dialogs/dialog-investment-athlete";
import DialogGroupInvestmentAthlete from "../athletes/_dialogs/dialog-group-investment-athlete";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import TableInvestiments from "./table-investiments";
import TableGroupInvestiments from "./table-group-investiments";

const TableRoot = ({ athlete }: { athlete?: Athlete }) => {
  const [showGroup, setShowGroup] = useState<boolean>(false);
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
        <TableGroupInvestiments athleteId={athlete?.id} />
      ) : (
        <TableInvestiments athleteId={athlete?.id} />
      )}
    </div>
  );
};

export default TableRoot;
