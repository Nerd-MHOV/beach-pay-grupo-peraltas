"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

const TableToggle = () => {
  const router = useRouter();
  const [showTournament, setShowTournament] = useState<boolean>(false);

  const handleToggleChange = (checked: boolean) => {
    setShowTournament(checked);
    router.push(`?tournament=${checked}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="table-mode">Investimento</Label>
      <Switch
        id="table-mode"
        onCheckedChange={handleToggleChange}
        checked={showTournament}
      />
      <Label htmlFor="table-mode">Torneio</Label>
    </div>
  );
};

export default TableToggle;
