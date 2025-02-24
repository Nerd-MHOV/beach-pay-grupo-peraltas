import React from "react";
import DialogCreateTournament from "./dialog-create-tournament";
import TableTournaments from "./table-tournaments";
import { getTournaments } from "./actions";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Page = async () => {
  const tournaments = await getTournaments();
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

      <TableTournaments tournaments={tournaments} />
    </div>
  );
};

export default Page;
