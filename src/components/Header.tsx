import React from "react";

const Header = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-background p-7 rounded-xl shadow-lg items-center w-full flex justify-between">
      <h1 className="text-xl font-bold">{title}</h1>

      {children}
    </div>
  );
};

export default Header;
