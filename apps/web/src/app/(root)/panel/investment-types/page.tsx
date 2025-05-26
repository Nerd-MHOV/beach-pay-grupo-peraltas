import React, { Suspense } from "react";
import DialogCreateInvestmentType from "./dialog-create-investment-type";
import TableInvestmentTypes from "./table-investment-types";
import { Header } from "@/components/Header";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoadingData from "@/components/LoadingData";
import DialogEditFixedValues from "./fixed-values/dialog-edit-fixed-values";
import { Separator } from "@/components/ui/separator";
import EditFixedValuesData from "./fixed-values/edit-fixed-values-data";

const Page = () => {
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Tipos de Investimentos</Header.Title>
        <Header.Content>
          <div className="flex items-center">
            <Suspense>
              <EditFixedValuesData />
            </Suspense>
            <Separator orientation="vertical" className="mx-2 h-10 " />
            <DialogCreateInvestmentType
              trigger={
                <Button size="sm">
                  <Plus />
                  Tipo de investimento
                </Button>
              }
            />
          </div>
        </Header.Content>
      </Header.Root>

      <Suspense fallback={<LoadingData message="Buscando Investimentos" />}>
        <TableInvestmentTypes />
      </Suspense>
    </div>
  );
};

export default Page;
