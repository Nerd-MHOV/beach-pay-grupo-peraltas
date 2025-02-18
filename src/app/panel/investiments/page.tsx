import React from "react";
import DialogCreateInvestimentType from "./dialog-create-investiment-type";
import { getInvestimentsType } from "./actions";
import TableInvestiments from "./table-investiments";
import { Header } from "@/components/Header";

const Page = async () => {
  const investiments = await getInvestimentsType();
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Tipos de Investimentos</Header.Title>
        <Header.Content>
          <DialogCreateInvestimentType />
        </Header.Content>
      </Header.Root>

      <TableInvestiments invetiments={investiments} />
    </div>
  );
};

export default Page;
