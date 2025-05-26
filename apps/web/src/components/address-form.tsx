/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Separator } from "./ui/separator";
import SimpleInput from "./simple-input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Combobox } from "./combobox";
import { cities } from "@/app/(root)/panel/arenas/cities";

// export interface AddressFormData {
//   number: string | null;
//   street: string | null;
//   complement: string | null;
//   neighborhood: string | null;
//   city_state: string;
//   zip_code: string | null;
// }

interface AddressFormProps {
  form: UseFormReturn<any>;
}

const AddressForm: React.FC<AddressFormProps> = ({ form }) => {
  return (
    <>
      <Separator />
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <SimpleInput
            form={form}
            label="Rua"
            name="street"
            placeholder="Av..."
          />
        </div>
        <SimpleInput
          form={form}
          label="Número"
          name="number"
          placeholder="223B..."
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <SimpleInput
          form={form}
          label="Bairro"
          name="neighborhood"
          placeholder="bairro"
        />
        <SimpleInput
          form={form}
          label="Complemento"
          name="complement"
          placeholder="complemento"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3">
          <FormField
            control={form.control}
            name="city_state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cidade*</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder="Selecione a cidade"
                    items={cities.map((city) => ({
                      label: city,
                      value: city,
                    }))}
                    selected={field.value}
                    onSelect={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <SimpleInput
          form={form}
          label="CEP"
          name="zip_code"
          placeholder="17380-000"
        />
      </div>
      <Separator />
    </>
  );
};

export default AddressForm;
