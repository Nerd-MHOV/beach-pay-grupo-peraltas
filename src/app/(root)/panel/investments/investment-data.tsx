import React from "react";

import TableRoot from "./table-root";
import { getInvestmentTournaments, getInvestments } from "./actions";

const InvestmentData = async () => {
  const investmentTournament = await getInvestmentTournaments();
  const investments = await getInvestments();
  return (
    <TableRoot
      investmentTournament={investmentTournament}
      investments={investments}
    />
  );
};

export default InvestmentData;
