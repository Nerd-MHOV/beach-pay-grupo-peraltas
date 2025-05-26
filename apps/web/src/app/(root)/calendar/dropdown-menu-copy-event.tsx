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
import { EventType } from "./calendar-client-component";
import { copyEvents, copyEventsSpecific } from "./actions";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";

const DropdownMenuCopyEvent = ({
  events,
  clear,
}: {
  events: {
    event_id: string;
    event_type: EventType;
  }[];
  clear: () => void;
}) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const handleCopyNext = async (type: "nextWeek" | "nextMonth") => {
    try {
      await copyEvents(events, type);
      clear();
      toast({
        title: "Eventos Copiados",
        description: `Lembre de verificar os dados do evento.`,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao copiar os eventos",
        description: "Ops... Confira os eventos e tente de novo.",
        variant: "destructive",
      });
    }
  };

  const handleCopyEventSpecific = async () => {
    if (!date) {
      toast({
        title: "Selecione uma data",
        description: "",
        variant: "destructive",
      });
      return;
    }
    try {
      await copyEventsSpecific(events, date);
      clear();
      toast({
        title: "Eventos Copiados",
        description: `Lembre de verificar os dados do evento.`,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao copiar os eventos",
        description: "Ops... Confira os eventos e tente de novo.",
        variant: "destructive",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-slate-900 bg-slate-300 hover:bg-slate-400">
          Copiar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-300">
        <div className="bg-white">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(value) => {
              setDate(value);
            }}
            defaultMonth={date}
            autoFocus
            showOutsideDays={false}
            captionLayout="dropdown"
            locale={ptBR}
          />
        </div>
        <DropdownMenuItem
          className="cursor-pointer text-slate-900 hover:bg-slate-700 hover:text-slate-100"
          onClick={handleCopyEventSpecific}
        >
          Data Específica
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-4" />
        <DropdownMenuItem
          className="cursor-pointer text-slate-900 hover:bg-slate-700 hover:text-slate-100"
          onClick={handleCopyNext.bind(null, "nextWeek")}
        >
          Próxima Semana
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-slate-900 hover:bg-slate-700 hover:text-slate-100"
          onClick={handleCopyNext.bind(null, "nextMonth")}
        >
          Próximo Mês
        </DropdownMenuItem>

        <DropdownMenuItem
          className="cursor-pointer text-slate-900 hover:bg-slate-700 hover:text-slate-100"
          onClick={clear}
        >
          Limpar Seleção
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuCopyEvent;
