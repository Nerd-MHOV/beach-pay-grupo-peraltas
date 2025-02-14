import React, { ReactNode } from "react";

const HeaderRoot = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-background p-7 rounded-xl shadow-lg items-center w-full flex justify-between">
      {children}
    </div>
  );
};

export default HeaderRoot;
