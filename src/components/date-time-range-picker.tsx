"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

/**
 * Define a interface para o intervalo de data e hora.
 */
export interface DateRange {
  from: Date;
  to: Date;
}

/**
 * Propriedades do componente DateTimeRangePicker.
 */
export interface DateTimeRangePickerProps {
  value: DateRange | null;
  onChange: (value: DateRange) => void;
  disabled?: boolean;
}

/**
 * Função auxiliar para tratar a atualização de hora ou minuto
 * no intervalo de data (from ou to).
 */
function handleTimeChange(
  currentValue: DateRange | null,
  typeDate: "from" | "to",
  type: "hour" | "minute",
  newValue: string,
  onChange: (value: DateRange) => void
) {
  if (!currentValue) return;
  const newDate = new Date(currentValue[typeDate]);
  if (type === "hour") {
    newDate.setHours(parseInt(newValue, 10));
  } else {
    newDate.setMinutes(parseInt(newValue, 10));
  }
  onChange({ ...currentValue, [typeDate]: newDate });
}

/**
 * Componente de seleção de intervalo de data e hora com Popover.
 */
export default function DateTimeRangePicker({
  value,
  onChange,
  disabled,
}: DateTimeRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant={"outline"}
          className={cn(
            "w-full pl-3 text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          {value ? (
            value.to ? (
              <>
                {format(value.from, "dd LLL HH:mm", { locale: ptBR })} à{" "}
                {format(value.to, "dd LLL HH:mm yyyy", { locale: ptBR })}
              </>
            ) : (
              format(value.from, "LLL dd, y")
            )
          ) : (
            <span>Selecione uma Data</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="flex flex-col">
          {/* Componente Calendar para seleção de intervalo */}
          <Calendar
            mode="range"
            selected={value || undefined}
            onSelect={(v) => v && onChange(v as DateRange)}
            autoFocus
            showOutsideDays={false}
            captionLayout="dropdown"
          />
          {/* Seção para seleção de horário */}
          <div className="flex divide-x justify-around">
            <div className="flex gap-2 p-2 justify-between mx-auto my-2">
              <Select
                value={value ? value.from.getHours().toString() : ""}
                onValueChange={(v) =>
                  handleTimeChange(value, "from", "hour", v, onChange)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                    <SelectItem key={hour} value={hour.toString()}>
                      {hour.toString().padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={value ? value.from.getMinutes().toString() : ""}
                onValueChange={(v) =>
                  handleTimeChange(value, "from", "minute", v, onChange)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                    <SelectItem key={minute} value={minute.toString()}>
                      {minute.toString().padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 p-2 justify-between mx-auto my-2">
              <Select
                value={value ? value.to.getHours().toString() : ""}
                onValueChange={(v) =>
                  handleTimeChange(value, "to", "hour", v, onChange)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                    <SelectItem key={hour} value={hour.toString()}>
                      {hour.toString().padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={value ? value.to.getMinutes().toString() : ""}
                onValueChange={(v) =>
                  handleTimeChange(value, "to", "minute", v, onChange)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                    <SelectItem key={minute} value={minute.toString()}>
                      {minute.toString().padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
