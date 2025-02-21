import React from "react";
import { Header } from "@/components/Header";
import { getGroupInvestiments, getInvestiments } from "./actions";
import TableInvestiments from "./table-investiment";

const Page = async () => {
  const investiments = await getInvestiments();
  const groupInvestiments = await getGroupInvestiments();
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Investimentos</Header.Title>
        {/* <Header.Content>
          <DialogCreateInvestiment />
        </Header.Content> */}
      </Header.Root>

      <TableInvestiments
        invetiments={investiments}
        groupInvestiments={groupInvestiments}
      />
    </div>
  );
};

export default Page;
