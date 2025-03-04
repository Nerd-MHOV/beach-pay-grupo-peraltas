import { Button } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";

const DownloadMenu = ({ disabled }: { disabled?: boolean }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn({
            "pointer-events-none": disabled,
          })}
          variant="outline"
        >
          Download
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Relatórios</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Descritivo
            <DropdownMenuShortcut>PDF</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Descritivo
            <DropdownMenuShortcut>XLSX</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Geral
            <DropdownMenuShortcut>PDF</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Geral
            <DropdownMenuShortcut>XLSX</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DownloadMenu;
