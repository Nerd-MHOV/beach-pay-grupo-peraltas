import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { UseFormReturn } from "react-hook-form";
import { Input } from "./ui/input";

const SimpleInput = ({
  form,
  label,
  placeholder,
  type = "text",
  name,
  disabled,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  disabled?: boolean;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              disabled={disabled}
              placeholder={placeholder}
              type={type}
              value={field.value}
              onChange={(e) => {
                let value: number | string = e.target.value;
                if (type === "number") value = Number(value);
                field.onChange(value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SimpleInput;
