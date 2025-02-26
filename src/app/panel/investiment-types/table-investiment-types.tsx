import { getInvestimentsType } from "./actions";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const TableInvestimentTypes = async () => {
  const investiments = await getInvestimentsType();

  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable columns={columns} data={investiments} />
    </div>
  );
};

export default TableInvestimentTypes;
