/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CircleX } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";

const ProofFormField = ({
  form,
  proof,
}: {
  proof: string | null;
  form: UseFormReturn<any>;
}) => {
  const [investmentProof, setInvestmentProof] = useState<string | null>(proof);
  return (
    <FormField
      control={form.control}
      name="proof"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Comprovante</FormLabel>
          <FormControl>
            {investmentProof && proof ? (
              <div className="relative ">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    setInvestmentProof(null);
                  }}
                  className="absolute top-0 right-0 "
                >
                  <CircleX className="text-red-600" />
                </Button>

                <Image
                  onClick={() => {
                    const url = `${proof}`;
                    window.open(url, "_blank");
                  }}
                  src={proof}
                  width={200}
                  height={200}
                  objectFit="cover"
                  alt="proof"
                />
              </div>
            ) : (
              <Input
                type="file"
                onChange={(e) => {
                  field.onChange(e.target.files?.[0] || null);
                  if (form.getValues().paid === null)
                    form.setValue("paid", new Date());
                }}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ProofFormField;
