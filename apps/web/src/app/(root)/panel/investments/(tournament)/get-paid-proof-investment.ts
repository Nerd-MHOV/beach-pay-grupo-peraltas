import { Investment } from "@prisma/client";

export function getPaidProofInvestment(investments?: Investment[]) {
  const paid = investments?.every((investment) => investment.paid)
    ? investments[0]?.paid
    : null;
  const proof = investments?.every((investment) => investment.proof)
    ? investments[0]?.proof
    : null;

  return { paid, proof };
}
