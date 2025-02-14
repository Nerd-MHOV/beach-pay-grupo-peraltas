import React from "react";
import DialogCreateArena from "../arenas/dialog-create-arena";
import TableArenas from "./table-arenas";
import { getArenas } from "./actions";
import { Header } from "@/components/Header";

const Page = async () => {
  const arenas = await getArenas();
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Arenas</Header.Title>
        <Header.Content>
          <DialogCreateArena />
        </Header.Content>
      </Header.Root>

      <TableArenas arenas={arenas} />
    </div>
  );
};

export default Page;
