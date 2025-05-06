"use client";
import { Member } from "@prisma/client";
import DialogInvestmentAthlete from "./(single)/dialog-investment-athlete";
import DialogGroupInvestmentAthlete from "./(tournament)/dialog-investment-tournament";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import TableInvestmentTournament from "./(tournament)/table-investment-tournament";
import { getInvestmentTournaments, getInvestments } from "./actions";
import TableInvestments from "./(single)/table-investments";

const TableRoot = ({
  athlete,
  investmentTournament,
  investments,
}: {
  athlete?: Member;
  investmentTournament: Awaited<ReturnType<typeof getInvestmentTournaments>>;
  investments: Awaited<ReturnType<typeof getInvestments>>;
}) => {
  const [showTournament, setShowTournament] = useState<boolean>(false);
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
              <Plus /> Vincular Torneio
            </Button>
          }
          athlete={athlete}
        />
        <div className="flex items-center space-x-2">
          <Label htmlFor="table-mode">Investimento</Label>
          <Switch
            id="table-mode"
            onCheckedChange={setShowTournament}
            checked={showTournament}
          />
          <Label htmlFor="table-mode">Torneio</Label>
        </div>
      </div>

      {showTournament ? (
        <TableInvestmentTournament
          pdfDescription={description}
          investmentTournaments={investmentTournament}
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
