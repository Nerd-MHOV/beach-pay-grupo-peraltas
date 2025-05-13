"use client";
import React from "react";
import { format, startOfWeek, endOfWeek } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Combobox } from "@/components/combobox";
import { getTeachers } from "../panel/members/actions";
import { useQuery } from "@tanstack/react-query";
import { ptBR } from "date-fns/locale";
import PDFWeekLessonsTeacher from "./pdf-week-lessons-teacher";
import { getLessons } from "./lesson/actions";
import { useToast } from "@/hooks/use-toast";

export function DatePickerWithRange({
  className,
  value,
  onChange,
}: React.HTMLAttributes<HTMLDivElement> & {
  value: DateRange | undefined;
  onChange: (value: DateRange | undefined) => void;
}) {
  const handleSelect = (selectedDate: DateRange | undefined) => {
    let dayClicked = selectedDate?.from;
    if (selectedDate?.from === value?.from) {
      dayClicked = selectedDate?.to;
    }
    if (dayClicked) {
      const startOfWeekDate = startOfWeek(dayClicked, { weekStartsOn: 0 }); // Domingo
      const endOfWeekDate = endOfWeek(dayClicked, { weekStartsOn: 0 }); // Sábado
      onChange({ from: startOfWeekDate, to: endOfWeekDate });
    } else {
      onChange(undefined);
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {value?.from ? (
              value.to ? (
                <>
                  {format(value.from, "dd LLL", {
                    locale: ptBR,
                  })}{" "}
                  -{" "}
                  {format(value.to, "dd LLL, y", {
                    locale: ptBR,
                  })}
                </>
              ) : (
                format(value.from, "dd LLL, y", {
                  locale: ptBR,
                })
              )
            ) : (
              <span>Selecionar semana</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={value?.from}
            selected={value}
            onSelect={(selectedDate) => handleSelect(selectedDate)}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

const schemaForm = z.object({
  range: z.object({
    from: z.date(),
    to: z.date(),
  }),
  teacher_id: z.string(),
});
const ExportWeekTeacherLessons = () => {
  const [dataLessons, setDataLessons] = React.useState<
    Awaited<ReturnType<typeof getLessons>>
  >([]);
  const { toast } = useToast();
  const { data: teachers = [] } = useQuery({
    queryKey: ["teachers"],
    queryFn: () => getTeachers(),
    refetchOnWindowFocus: false,
  });

  const onSubmit = async (data: z.infer<typeof schemaForm>) => {
    toast({
      title: `Buscando...`,
      description: "Aguarde enquanto buscamos as aulas",
    });
    try {
      const response = await getLessons({
        period: {
          from: data.range.from,
          to: data.range.to,
        },
        teacher_id: data.teacher_id,
      });
      toast({
        title: "Aulas encontradas",
        description: `Foram encontradas ${response.length} aulas`,
      });
      setDataLessons(response);
    } catch (error) {
      toast({
        title: "Erro ao buscar aulas",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      });
    }
  };

  const form = useForm({
    resolver: zodResolver(schemaForm),
    defaultValues: {
      range: {
        from: new Date(),
        to: new Date(),
      },
      teacher_id: "",
    },
  });
  return (
    <div className="bg-background p-0 md:p-7 rounded-xl shadow-lg  gap-8 w-full overflow-hidden">
      <h1 className="py-4 text-2xl font-extrabold px-2">Exportar Aulas</h1>
      <Form {...form}>
        <form
          className="w-full flex gap-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="range"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DatePickerWithRange
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="teacher_id"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Combobox
                    disabled={field.disabled}
                    placeholder="Selecione a Professor"
                    items={teachers.map((teacher) => ({
                      label: teacher.name,
                      value: teacher.id,
                    }))}
                    selected={field.value}
                    onSelect={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant="outline">
            <Search /> Buscar
          </Button>
        </form>
      </Form>

      <PDFWeekLessonsTeacher dataLessons={dataLessons} />
    </div>
  );
};

export default ExportWeekTeacherLessons;
