import { getInvestmentsType } from "./actions";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const TableInvestmentTypes = async () => {
  const investments = await getInvestmentsType();

  return (
    <div className="bg-white p-7 rounded-xl shadow-lg">
      <DataTable
        columns={columns}
        data={investments}
        pdfTitle="Tipos de Investimentos"
      />
    </div>
  );
};

export default TableInvestmentTypes;
