import React from "react";
import { DropdownMenuCalendar } from "./dropdown-menu-calendar";
import { Checkbox } from "@/components/ui/checkbox";

const SidebarMenuCalendar = () => {
  return (
    <div className="md:w-3/12 w-full -mt-4 order-2 md:order-1">
      <h1 className="py-4 text-2xl font-extrabold px-2 ">
        Calendario de Eventos
      </h1>

      <div className="pl-4">
        <DropdownMenuCalendar />
      </div>

      <div className="pt-10 px-3">
        <h2 className="text-sm underline underline-offset-2">
          Minhas Agendas:
        </h2>

        <div className="mt-4 space-y-2">
          <div className="flex items-center ">
            <Checkbox
              id="evento-outro-1"
              className="mr-2 data-[state=checked]:bg-[#f9c2c2] data-[state=checked]:border-[#f9c2c2]"
            />
            <label htmlFor="evento-outro-1" className="text-md font-medium">
              Minha Disponibilidade
            </label>
          </div>
          <div className="flex items-center ">
            <Checkbox
              id="evento-outro-2"
              className="mr-2 data-[state=checked]:bg-[#D2d2d2] data-[state=checked]:border-[#D2d2d2]"
            />
            <label htmlFor="evento-outro-2" className="text-md font-medium">
              Torneios
            </label>
          </div>
          <div className="flex items-center ">
            <Checkbox id="evento-outro-3" className="mr-2" />
            <label htmlFor="evento-outro-3" className="text-md font-medium">
              Aulas
            </label>
          </div>
        </div>
      </div>

      <div className="px-2 py-10">
        <h2 className="text-sm underline underline-offset-2">
          Outras Agendas:
        </h2>

        <div className="mt-4 space-y-3">
          <div className="flex items-center ">
            <Checkbox
              id="evento1"
              className="mr-2 data-[state=checked]:bg-[#f219c9] data-[state=checked]:border-[#f219c9]"
            />
            <label htmlFor="evento1" className="text-md font-medium">
              Disponibilidade João
            </label>
          </div>
          <div className="flex items-center ">
            <Checkbox
              id="evento2"
              className="mr-2 data-[state=checked]:bg-[#029af8] data-[state=checked]:border-[#029af8]"
            />
            <label htmlFor="evento2" className="text-md font-medium">
              Disponibilidade Marcos
            </label>
          </div>
          <div className="flex items-center ">
            <Checkbox id="evento3" className="mr-2" />
            <label htmlFor="evento3" className="text-md font-medium">
              Disponibilidade Felipe
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenuCalendar;
