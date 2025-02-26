import { Investiment } from "@prisma/client";

export function getPaidProofInvestiment(investiments?: Investiment[]) {
  const paid = investiments?.every((investiment) => investiment.paid)
    ? investiments[0]?.paid
    : null;
  const proof = investiments?.every((investiment) => investiment.proof)
    ? investiments[0]?.proof
    : null;

  return { paid, proof };
}
