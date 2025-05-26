"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { useSearchParams, useRouter } from "next/navigation";

const formSchema = z.object({
  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
});
const FormDownloadReport = () => {
  const searchParams = useSearchParams();
  const params = {
    from: searchParams.get("from"),
    to: searchParams.get("to"),
  };
  const router = useRouter();
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push(
      `/panel/dashboard?from=${format(
        values.date.from,
        "MM-dd-yyyy"
      )}&to=${format(values.date.to, "MM-dd-yyyy")}`
    );
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:
      params.from && params.to
        ? {
            date: {
              from: new Date(params.from),
              to: new Date(params.to),
            },
          }
        : undefined,
  });
  return (
    <Form {...form}>
      <form
        className="flex gap-4 flex-col sm:flex-row"
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button isLoading={form.formState.isSubmitting} variant="default">
          Buscar
        </Button>
        {/* <DownloadMenu
        // disabled={!form.getValues().date}
        /> */}
      </form>
    </Form>
  );
};

export default FormDownloadReport;
