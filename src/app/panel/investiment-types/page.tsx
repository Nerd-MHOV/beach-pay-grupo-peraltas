import React from "react";
import DialogCreateInvestimentType from "./dialog-create-investiment-type";
import { getInvestimentsType } from "./actions";
import TableInvestimentTypes from "./table-investiment-types";
import { Header } from "@/components/Header";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Page = async () => {
  const investiments = await getInvestimentsType();
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

      <TableInvestimentTypes invetiments={investiments} />
    </div>
  );
};

export default Page;
