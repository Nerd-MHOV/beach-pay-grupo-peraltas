import { getMemberById } from "../../actions";

export const getCountTiers = (
  athlete: NonNullable<Awaited<ReturnType<typeof getMemberById>>>
): { tier: string; count: number }[] => {
  const tiers =
    athlete?.lesson?.reduce((acc, cur) => {
      const tier = cur.tier;
      if (!acc[tier]) {
        acc[tier] = { tier, count: 0 };
      }
      acc[tier].count += 1;
      return acc;
    }, {} as Record<string, { tier: string; count: number }>) || {};

  return Object.values(tiers);
};