import React from "react";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Checkbox } from "./ui/checkbox";
import { UseFormReturn } from "react-hook-form";

const CheckboxInput = ({
  form,
  name,
  label,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  label: string;
  name: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="flex items-center space-x-2">
              <Checkbox
                id={`${name}-checkbox-id`}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <label
                htmlFor={`${name}-checkbox-id`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {label}
              </label>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CheckboxInput;
