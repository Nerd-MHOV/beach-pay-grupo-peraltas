import React from "react";
import { DropdownMenuCalendar } from "./dropdown-menu-calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FilterEventsProps,
  SetFilterEventsProps,
  SetFormFieldProps,
} from "./calendar-client-component";

export const noMatchFilterEventsOthers = [
  {
    name: "Minha Disponibilidade",
    color: "#D2d2d2", // bg-[#D2d2d2]
  },
  {
    name: "Torneios",
    color: "#f9c2c2", // bg-[#f9c2c2]
  },
  {
    name: "Aulas",
    color: "#7289d4", // bg-[#7289d4]
  },
];

const SidebarMenuCalendar = ({
  setDialogOpen,
  setFormFields,
  filterEvents,
  setFilterEvents,
}: {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFormFields: SetFormFieldProps;
  filterEvents: FilterEventsProps;
  setFilterEvents: SetFilterEventsProps;
}) => {
  return (
    <div className="md:w-3/12 w-full flex flex-row md:flex-col items-center sm:items-start justify-between md:justify-start ">
      <h1 className="py-4 text-2xl font-extrabold px-2">
        Calendario de Eventos
      </h1>

      <div className="pl-4">
        <DropdownMenuCalendar
          setDialogOpen={setDialogOpen}
          setFormFields={setFormFields}
        />
      </div>

      <div className="hidden md:block">
        <div className="pt-10 px-3">
          <h2 className="text-sm underline underline-offset-2">
            Minhas Agendas:
          </h2>

          <div className="mt-4 space-y-2">
            {noMatchFilterEventsOthers.map((filter) => (
              <div className="flex items-center " key={filter.name}>
                <Checkbox
                  id={`evento-${filter.name}`}
                  checked={filterEvents[filter.name]}
                  onCheckedChange={(checked) =>
                    setFilterEvents((prev) => ({
                      ...prev,
                      [filter.name]: !!checked,
                    }))
                  }
                  className={`mr-2 data-[state=checked]:bg-[${filter.color}] data-[state=checked]:border-[${filter.color}]`}
                />
                <label
                  htmlFor={`evento-${filter.name}`}
                  className="text-md font-medium"
                >
                  {filter.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="px-2 py-10">
          <h2 className="text-sm underline underline-offset-2">
            Outras Agendas:
          </h2>

          <div className="mt-4 space-y-3">
            {Object.keys(filterEvents)
              .filter(
                (fe) =>
                  !noMatchFilterEventsOthers.map((mat) => mat.name).includes(fe)
              )
              .map((filter) => (
                <div className="flex items-center " key={filter}>
                  <Checkbox
                    id="evento1"
                    checked={filterEvents[filter]}
                    onCheckedChange={(checked) =>
                      setFilterEvents((prev) => ({
                        ...prev,
                        [`${filter}`]: !!checked,
                      }))
                    }
                    className="mr-2 data-[state=checked]:bg-[#95cf9a] data-[state=checked]:border-[#95cf9a]"
                  />
                  <label htmlFor="evento1" className="text-md font-medium">
                    {filter}
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenuCalendar;
