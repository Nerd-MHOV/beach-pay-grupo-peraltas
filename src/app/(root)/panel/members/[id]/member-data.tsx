import React from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { format } from "date-fns";
import FormMember from "../form/form-member";
import DialogDeleteMember from "./dialog-delete-member";
import { getMemberById } from "../actions";
import DashboardAthlete from "./dashboard-athlete";
import { Separator } from "@/components/ui/separator";
import DashboardTeacher from "./dashboard-teacher";
import DashboardStudent from "./dashboard-student";
import HeaderRootMember from "./header-root-member";

const MemberData = async ({ id }: { id: string }) => {
  const member = await getMemberById(id);

  if (!member) {
    return notFound();
  }

  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <HeaderRootMember member={member} />

      {member.is_athlete && (
        <>
          <DashboardAthlete athlete={member} />
          <Separator className="my-8" />
        </>
      )}

      {member.is_teacher && (
        <>
          <DashboardTeacher member={member} />
          <Separator className="my-8" />
        </>
      )}

      {member.is_student && (
        <>
          <DashboardStudent member={member} />
          <Separator className="my-8" />
        </>
      )}

      <div className="bg-white p-7 rounded-xl shadow-lg">
        <FormMember member={member} />
      </div>

      <div className="flex w-full items-end justify-end mt-20 mb-5 pr-5">
        <DialogDeleteMember member={member} />
      </div>
    </div>
  );
};

export default MemberData;
