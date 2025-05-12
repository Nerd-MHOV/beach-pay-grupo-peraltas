import { Header } from "@/components/Header";
import { Member } from "@prisma/client";
import { format } from "date-fns";
import React from "react";

const HeaderRootMember = ({ member }: { member: Member }) => {
  return (
    <Header.Root>
      <Header.Title subtitle={member.responsible ?? undefined}>
        {member.name}
      </Header.Title>
      <Header.Content>
        <div className="flex flex-col justify-end items-end space-x-2">
          <span className="text-sm text-gray-400">
            criado em: {format(member.created_at, "dd/MM/yyyy HH:ii")}
          </span>
          <span className="text-sm text-gray-400">
            última atualização: {format(member.updated_at, "dd/MM/yyyy HH:ii")}
          </span>
        </div>
      </Header.Content>
    </Header.Root>
  );
};

export default HeaderRootMember;
