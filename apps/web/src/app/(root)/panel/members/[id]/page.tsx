import LoadingData from "@/components/LoadingData";
import React, { Suspense } from "react";
import MemberData from "./member-data";

const Page = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await params;
  return (
    <Suspense fallback={<LoadingData message="Buscando dados do praticante" />}>
      <MemberData id={id} />
    </Suspense>
  );
};

export default Page;
