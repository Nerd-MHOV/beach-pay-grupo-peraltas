import React, { Suspense } from "react";
import DialogCreateInvestmentType from "./dialog-create-investment-type";
import TableInvestmentTypes from "./table-investment-types";
import { Header } from "@/components/Header";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoadingData from "@/components/LoadingData";

const Page = () => {
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Tipos de Investimentos</Header.Title>
        <Header.Content>
          <DialogCreateInvestmentType
            trigger={
              <Button size="sm">
                <Plus />
                Tipo de investimento
              </Button>
            }
          />
        </Header.Content>
      </Header.Root>

      <Suspense fallback={<LoadingData message="Buscando Investimentos" />}>
        <TableInvestmentTypes />
      </Suspense>
    </div>
  );
};

export default Page;
