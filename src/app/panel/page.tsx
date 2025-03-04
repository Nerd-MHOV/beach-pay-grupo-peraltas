import { Header } from "@/components/Header";
import React, { Suspense } from "react";
import FormDownloadReport from "./form-download-report";
import DefaultDashboard from "./default-dashboard";
import { SkeletonDefaultDashboard } from "./skeleton-default-dashboard";

const Panel = () => {
  return (
    <div className="px-2 sm:px-10 py-3 mb-20 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title>Dashboard</Header.Title>
        <Header.Content>
          <FormDownloadReport />
        </Header.Content>
      </Header.Root>

      <Suspense fallback={<SkeletonDefaultDashboard />}>
        <DefaultDashboard />
      </Suspense>
    </div>
  );
};

export default Panel;
