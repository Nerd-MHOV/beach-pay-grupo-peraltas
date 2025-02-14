import React, { ReactNode } from "react";

const HeaderTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-xl font-bold">{children}</h1>;
};

export default HeaderTitle;
