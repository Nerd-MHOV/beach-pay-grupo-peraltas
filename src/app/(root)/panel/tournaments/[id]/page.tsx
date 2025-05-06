import { Suspense } from "react";
import TournmanetData from "./tournament-data";
import LoadingData from "@/components/LoadingData";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <Suspense fallback={<LoadingData message="Buscando dados do torneio" />}>
      <TournmanetData id={id} />
    </Suspense>
  );
};

export default Page;
