import React, { Suspense } from "react";
import DialogCreateArena from "./dialog-create-arena";
import TableArenas from "./table-arenas";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import LoadingData from "@/components/LoadingData";

export const dynamic = "force-dynamic";
const Page = () => {
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Arenas</Header.Title>
        <Header.Content>
          <DialogCreateArena
            trigger={
              <Button size="sm">
                <Plus />
                Arena
              </Button>
            }
          />
        </Header.Content>
      </Header.Root>

      <Suspense fallback={<LoadingData message="Buscando Arenas" />}>
        <TableArenas />
      </Suspense>
    </div>
  );
};

export default Page;
