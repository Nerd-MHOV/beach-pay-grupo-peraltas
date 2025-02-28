import React, { Suspense } from "react";
import { Header } from "@/components/Header";
import TableRoot from "./table-root";
import LoadingData from "@/components/LoadingData";
import { getGroupInvestments, getInvestments } from "./actions";

const Page = async () => {
  const groupInvestments = await getGroupInvestments();
  const investments = await getInvestments();

  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Investimentos</Header.Title>
      </Header.Root>

      <Suspense fallback={<LoadingData message="Buscando Investimentos" />}>
        <TableRoot
          groupInvestments={groupInvestments}
          investments={investments}
        />
      </Suspense>
    </div>
  );
};

export default Page;
