import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDefaultDashboard() {
  return (
    <div className=" space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <Skeleton className="h-[125px] w-full rounded-xl" />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Skeleton className="col-span-4 h-[500px] w-full rounded-xl" />
        <Skeleton className="col-span-4  md:col-span-3 h-[500px] w-full rounded-xl" />
      </div>
    </div>
  );
}
