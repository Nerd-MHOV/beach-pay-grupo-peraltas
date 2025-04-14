"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type DateRange = {
  from: Date;
  to: Date;
};

interface DateTimeRangePickerProps {
  value: DateRange | null;
  onChange: (value: DateRange) => void;
}

export default function DateTimeRangePicker({
  value,
  onChange,
}: DateTimeRangePickerProps) {
  const handleTimeChange = (
    typeDate: "from" | "to",
    type: "hour" | "minute",
    newValue: string
  ) => {
    if (!value) return;
    const newDate = new Date(value[typeDate]);
    if (type === "hour") {
      newDate.setHours(parseInt(newValue, 10));
    } else {
      newDate.setMinutes(parseInt(newValue, 10));
    }
    onChange({ ...value, [typeDate]: newDate });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
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
          <Calendar
            mode="range"
            selected={value || undefined}
            onSelect={(v) => {
              // O Calendar pode retornar null caso a seleção seja resetada
              if (v) onChange(v as DateRange);
            }}
            autoFocus
            showOutsideDays={false}
            captionLayout="dropdown"
          />
          <div className="flex divide-x justify-around">
            <div className="flex gap-2 p-2 justify-between mx-auto my-2">
              <Select
                value={value ? value.from.getHours().toString() : ""}
                onValueChange={(v) => handleTimeChange("from", "hour", v)}
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
                onValueChange={(v) => handleTimeChange("from", "minute", v)}
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
                onValueChange={(v) => handleTimeChange("to", "hour", v)}
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
                onValueChange={(v) => handleTimeChange("to", "minute", v)}
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
