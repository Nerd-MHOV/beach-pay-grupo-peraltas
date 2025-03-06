import { Checkbox } from "@/components/ui/checkbox";
import { ExtendedColumnDef } from "@/components/ui/data-table";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SelectComponentColumn: ExtendedColumnDef<any, undefined> = {
  id: "select",
  label: " ",
  header: ({ table }) => (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Select all"
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  ),
  enableSorting: false,
  enableHiding: false,
};

export default SelectComponentColumn;
