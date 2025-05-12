"use client";

import React from "react";
import HeaderRootMember from "../header-root-member";
import { getMemberById } from "../../actions";
import { useQuery } from "@tanstack/react-query";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const DrawerMemberContents = ({
  trigger,
  id,
  content,
}: {
  trigger: React.JSX.Element;
  id: string;
  content: (
    member: NonNullable<Awaited<ReturnType<typeof getMemberById>>>
  ) => React.JSX.Element;
}) => {
  const { data: member } = useQuery({
    queryKey: ["member", id],
    queryFn: () => getMemberById(id),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 0,
  });

  if (!member) {
    return null;
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="max-h-[97vh]">
        <DrawerHeader>
          <DrawerTitle className="hidden">Drawer</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-auto pb-10">
          <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
            <HeaderRootMember member={member} />
            {content(member)}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMemberContents;
