"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import React from "react";
import { cancelLesson } from "./actions";
import { $Enums } from "@beach-pay/database";

const DropdownMenuCancelLesson = ({
  id,
  onClosure,
}: {
  id: string;
  onClosure?: () => void;
}) => {
  const handleCancelLesson = async (reason: $Enums.ReasonsToNotAttend) => {
    try {
      await cancelLesson(id, reason);
      toast({
        title: "Aula cancelada",
        description: `A aula foi cancelada.`,
      });
      onClosure?.();
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao cancelar aula",
        description: "Ocorreu um erro ao cancelar a aula.",
        variant: "destructive",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Cancelar Aula</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="cursor-pointer text-red-900 hover:bg-red-200 hover:text-red-900"
          onClick={() =>
            handleCancelLesson($Enums.ReasonsToNotAttend.no_teacher)
          }
        >
          Sem professor
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-red-900 hover:bg-red-200 hover:text-red-900"
          onClick={() => handleCancelLesson($Enums.ReasonsToNotAttend.climatic)}
        >
          Interpéries climática
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuCancelLesson;
