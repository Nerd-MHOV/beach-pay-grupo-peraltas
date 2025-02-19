"use client";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { downloadReport } from "./actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";

const formSchema = z.object({
  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
});
const FormDownloadReport = () => {
  const { mutateAsync: donwloadFn, isPending } = useMutation({
    mutationKey: ["download-report"],
    mutationFn: downloadReport,
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    donwloadFn(values);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: {
        from: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        to: new Date(),
      },
    },
  });
  return (
    <Form {...form}>
      <form className="flex gap-4 flex-col sm:flex-row">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, "dd LLL", {
                              locale: ptBR,
                            })}{" "}
                            à{" "}
                            {format(field.value.to, "dd LLL - y", {
                              locale: ptBR,
                            })}
                          </>
                        ) : (
                          format(field.value.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Selecione uma Data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    numberOfMonths={2}
                    selected={field.value}
                    onSelect={(value) => {
                      field.onChange(value);
                    }}
                    autoFocus
                    showOutsideDays={false}
                    captionLayout="dropdown"
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          isLoading={isPending}
          variant="default"
          onClick={form.handleSubmit(onSubmit)}
        >
          Download
        </Button>
      </form>
    </Form>
  );
};

export default FormDownloadReport;
