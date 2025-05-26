import React, { Suspense } from "react";
import { Header } from "@/components/Header";
import LoadingData from "@/components/LoadingData";
import InvestmentData from "./investment-data";

const Page = () => {
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Investimentos</Header.Title>
      </Header.Root>

      <Suspense fallback={<LoadingData message="Buscando Investimentos" />}>
        <InvestmentData />
      </Suspense>
    </div>
  );
};

export default Page;
