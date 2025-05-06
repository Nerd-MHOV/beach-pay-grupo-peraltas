import React from "react";

import TableRoot from "./table-root";
import { getInvestmentGroups, getInvestments } from "./actions";

const InvestmentData = async () => {
  const investmentGroups = await getInvestmentGroups();
  const investments = await getInvestments();
  return (
    <TableRoot investmentGroup={investmentGroups} investments={investments} />
  );
};

export default InvestmentData;
