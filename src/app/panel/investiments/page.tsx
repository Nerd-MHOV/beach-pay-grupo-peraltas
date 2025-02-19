import React from "react";
import { Header } from "@/components/Header";
import { getInvestiments } from "./actions";
import TableInvestiments from "./table-investiment";

const Page = async () => {
  const investiments = await getInvestiments();
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Investimentos</Header.Title>
        {/* <Header.Content>
          <DialogCreateInvestiment />
        </Header.Content> */}
      </Header.Root>

      <TableInvestiments invetiments={investiments} />
    </div>
  );
};

export default Page;
