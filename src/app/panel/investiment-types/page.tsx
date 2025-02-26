import React, { Suspense } from "react";
import DialogCreateInvestimentType from "./dialog-create-investiment-type";
import TableInvestimentTypes from "./table-investiment-types";
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
          <DialogCreateInvestimentType
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
        <TableInvestimentTypes />
      </Suspense>
    </div>
  );
};

export default Page;
