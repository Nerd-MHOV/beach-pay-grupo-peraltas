import Header from "@/components/Header";
import React from "react";
import DialogCreateInvestimentType from "./dialog-create-investiment-type";
import { getInvestiments } from "./actions";
import TableInvestiments from "./table-investiments";

const Page = async () => {
  const investiments = await getInvestiments();
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header title="Investimentos">
        <div className="flex gap-2">
          <DialogCreateInvestimentType />
        </div>
      </Header>

      <TableInvestiments invetiments={investiments} />
    </div>
  );
};

export default Page;
