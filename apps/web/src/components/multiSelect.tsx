"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";
import roleOptions from "./role-options";

type Option = { label: string; value: string };

interface ISelectProps {
  placeholder: string;
  options: Option[];
  selected: Option[];
  onSelect: (selected: Option[]) => void;
}

const MultiSelect = forwardRef<HTMLInputElement, ISelectProps>(
  ({ placeholder, options, selected, onSelect }, ref) => {
    const handleSelectChange = (value: string) => {
      const selectedOption = options.find((opt) => opt.value === value);
      if (selectedOption) {
        if (!selected.find((item) => item.value === value)) {
          const newSelected = [...selected, selectedOption];
          onSelect(newSelected);
        } else {
          const newSelected = selected.filter((item) => item.value !== value);
          onSelect(newSelected);
        }
      }
    };

    const isOptionSelected = (value: string): boolean => {
      return selected.some((item) => item.value === value);
    };

    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="w-full">
            <Button
              variant="outline"
              className="w-full flex items-center justify-between"
            >
              <div>
                {selected.length
                  ? selected
                      .map(
                        (item) =>
                          roleOptions.find((role) => role.value === item.value)
                            ?.label
                      )
                      .join(", ")
                  : placeholder}
              </div>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-96 max-h-64 overflow-y-auto"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            {options.map((option, index) => (
              <DropdownMenuCheckboxItem
                key={index}
                checked={isOptionSelected(option.value)}
                onCheckedChange={() => handleSelectChange(option.value)}
              >
                {option.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <input
          type="hidden"
          ref={ref}
          value={JSON.stringify(selected.map((item) => item.value))}
        />
      </>
    );
  }
);

MultiSelect.displayName = "MultiSelect";

export default MultiSelect;
