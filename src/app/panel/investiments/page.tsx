import HeaderRoot from "@/components/Header/HeaderRoot";
import React from "react";
import DialogCreateInvestimentType from "./dialog-create-investiment-type";
import { getInvestimentsType } from "./actions";
import TableInvestiments from "./table-investiments";

const Page = async () => {
  const investiments = await getInvestimentsType();
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <HeaderRoot title="Investimentos">
        <div className="flex gap-2">
          <DialogCreateInvestimentType />
        </div>
      </HeaderRoot>

      <TableInvestiments invetiments={investiments} />
    </div>
  );
};

export default Page;
