/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useReducer } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { UseFormReturn } from "react-hook-form";

type CpfInputProps = {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder: string;
  dispabled?: boolean;
};

function cpfFormatter(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  return digits.replace(
    /^(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})$/,
    (_, p1, p2, p3, p4) => {
      let formatted = p1;
      if (p2) formatted += "." + p2;
      if (p3) formatted += "." + p3;
      if (p4) formatted += "-" + p4;
      return formatted;
    }
  );
}

export default function CpfInput(props: CpfInputProps) {
  const initialValue = props.form.getValues()[props.name]
    ? cpfFormatter(props.form.getValues()[props.name])
    : "";

  const [value, setValue] = useReducer((_: any, next: string) => {
    return cpfFormatter(next);
  }, initialValue);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  function handleChange(realChangeFn: Function, formattedValue: string) {
    const digits = formattedValue.replace(/\D/g, "");
    // Envia o valor "cru" (apenas dígitos) para o form
    realChangeFn(digits);
  }

  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }) => {
        field.value = value;
        const _change = field.onChange;
        return (
          <FormItem>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
              <Input
                disabled={props.dispabled}
                placeholder={props.placeholder}
                type="text"
                {...field}
                onChange={(ev) => {
                  setValue(ev.target.value);
                  handleChange(_change, ev.target.value);
                }}
                value={value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
