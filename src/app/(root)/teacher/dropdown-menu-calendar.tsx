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

export function DropdownMenuCalendar({
  setDialogOpen,
  setFormSelected,
}: {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFormSelected: React.Dispatch<React.SetStateAction<"availability" | "class" | "tournament">>;
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
          <DropdownMenuItem onClick={() => {
            setDialogOpen(true);
            setFormSelected("availability");
          }}>
            Disponibilidade
            <DropdownMenuShortcut>Professor</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => {
            setDialogOpen(true);
            setFormSelected("class");
          }}>Aula</DropdownMenuItem>
          <DropdownMenuItem onClick={() => {
            setDialogOpen(true);
            setFormSelected("tournament");
          }}>Torneios</DropdownMenuItem>
        </DropdownMenuGroup>

        <div className="block md:hidden">
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Minhas Agendas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
            <Checkbox
              id="evento1"
              className="mr-2 data-[state=checked]:bg-[#f9c2c2] data-[state=checked]:border-[#f9c2c2]"
            />
            Minha Disponibilidade
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
            <Checkbox
              id="evento1"
              className="mr-2 data-[state=checked]:bg-[#D2d2d2] data-[state=checked]:border-[#D2d2d2]"
            />
            Torneios
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
            <Checkbox
              id="evento1"
            />
            Aulas
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Outras Agendas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
            <Checkbox
              id="evento1"
              className="mr-2 data-[state=checked]:bg-[#f219c9] data-[state=checked]:border-[#f219c9]"
            />
            Disponibilidade João
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
            <Checkbox
              id="evento1"
              className="mr-2 data-[state=checked]:bg-[#029af8] data-[state=checked]:border-[#029af8]"
            />
            Disponibilidade Marcos
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
            <Checkbox
              id="evento1"
            />
            Disponibilidade Felipe
          </DropdownMenuItem>
        </DropdownMenuGroup>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
