"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

const TableToggle = () => {
  const router = useRouter();
  const [showGroup, setShowGroup] = useState<boolean>(false);

  const handleToggleChange = (checked: boolean) => {
    setShowGroup(checked);
    router.push(`?group=${checked}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="table-mode">Único</Label>
      <Switch
        id="table-mode"
        onCheckedChange={handleToggleChange}
        checked={showGroup}
      />
      <Label htmlFor="table-mode">Grupo</Label>
    </div>
  );
};

export default TableToggle;
