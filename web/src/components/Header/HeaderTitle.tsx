import React, { ReactNode } from "react";

const HeaderTitle = ({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: string;
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold">{children}</h1>
      {subtitle && <span className="text-sm text-gray-500">{subtitle}</span>}
    </div>
  );
};

export default HeaderTitle;
