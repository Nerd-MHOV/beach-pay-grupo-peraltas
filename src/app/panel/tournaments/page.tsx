import React, { Suspense } from "react";
import DialogCreateTournament from "./dialog-create-tournament";
import TableTournaments from "./table-tournaments";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import LoadingData from "@/components/LoadingData";

const Page = () => {
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Torneios</Header.Title>
        <Header.Content>
          <DialogCreateTournament
            trigger={
              <Button size="sm">
                <Plus />
                Torneio
              </Button>
            }
          />
        </Header.Content>
      </Header.Root>

      <Suspense fallback={<LoadingData message="Buscando Torneios" />}>
        <TableTournaments />
      </Suspense>
    </div>
  );
};

export default Page;
