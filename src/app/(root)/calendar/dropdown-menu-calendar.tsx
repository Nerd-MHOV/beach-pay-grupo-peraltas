import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus } from "lucide-react";
import {
  FilterEventsProps,
  SetFilterEventsProps,
  SetFormFieldProps,
} from "./calendar-client-component";
import { noMatchFilterEventsOthers } from "./sidebar-menu-calendar";

export function DropdownMenuCalendar({
  setDialogOpen,
  setFormFields,
  filterEvents,
  setFilterEvents,
}: {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFormFields: SetFormFieldProps;
  filterEvents: FilterEventsProps;
  setFilterEvents: SetFilterEventsProps;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Plus /> Criar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Apontamentos</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              setDialogOpen(true);
              setFormFields((prev) => ({
                ...prev,
                formSelected: "availability",
                selectedDate: undefined,
                id: undefined,
              }));
            }}
          >
            Disponibilidade
            <DropdownMenuShortcut>Professor</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setDialogOpen(true);
              setFormFields((prev) => ({
                ...prev,
                formSelected: "class",
                selectedDate: undefined,
                id: undefined,
              }));
            }}
          >
            Aula
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setDialogOpen(true);
              setFormFields((prev) => ({
                ...prev,
                formSelected: "tournament",
                selectedDate: undefined,
                id: undefined,
              }));
            }}
          >
            Torneios
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <div className="block md:hidden">
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Minhas Agendas</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {noMatchFilterEventsOthers.map((filter) => (
              <DropdownMenuItem
                onSelect={(event) => event.preventDefault()}
                key={filter.name}
              >
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
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuLabel>Outras Agendas</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {Object.keys(filterEvents)
              .filter(
                (fe) =>
                  !noMatchFilterEventsOthers.map((mat) => mat.name).includes(fe)
              )
              .map((filter) => (
                <DropdownMenuItem
                  onSelect={(event) => event.preventDefault()}
                  key={filter}
                >
                  <Checkbox
                    id={`evento-${filter}`}
                    checked={filterEvents[filter]}
                    onCheckedChange={(checked) =>
                      setFilterEvents((prev) => ({
                        ...prev,
                        [`${filter}`]: !!checked,
                      }))
                    }
                    className="mr-2 data-[state=checked]:bg-[#95cf9a] data-[state=checked]:border-[#95cf9a]"
                  />
                  <label
                    htmlFor={`evento-${filter}`}
                    className="text-md font-medium"
                  >
                    {filter}
                  </label>
                </DropdownMenuItem>
              ))}
          </DropdownMenuGroup>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
