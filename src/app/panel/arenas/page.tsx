import Header from "@/components/Header";
import React from "react";
import DialogCreateArena from "../arenas/dialog-create-arena";
import TableArenas from "./table-arenas";
import { getArenas } from "./actions";

const Page = async () => {
  const arenas = await getArenas();
  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header title="Arenas">
        <div className="flex gap-2">
          <DialogCreateArena />
        </div>
      </Header>

      <TableArenas arenas={arenas} />
    </div>
  );
};

export default Page;
