import { PrismaClient } from "@prisma/client";
import { UserSeedFn } from "./seeds/user.seed";
import { MemberSeedFn } from "./seeds/member.seed";
import { AddressSeedFn } from "./seeds/address.seed";
import { ArenaSeedFn } from "./seeds/arena.seed";
import { CourtsSeedFn } from "./seeds/courts.seed";
import { InvestmentTournamentSeedFn } from "./seeds/investmentTournament.seed";
import { LessonSeedFn } from "./seeds/lesson.seed";
import { LessonAttendanceSeedFn } from "./seeds/lessonAttendance.seed";
import { TeacherAvailabilitySeedFn } from "./seeds/teacherAvailability.seed";
import { InvestmentTypeSeedFn } from "./seeds/investmentType.seed";
import { InvestmentSeedFn } from "./seeds/investment.seed";
import { TournamentSeedFn } from "./seeds/tournament.seed";
import { FixedValuesSeedFn } from "./seeds/fixedValues.seed";

const prismaClient = new PrismaClient();

const seedData = [
  CourtsSeedFn,
  AddressSeedFn,
  MemberSeedFn,
  UserSeedFn,
  ArenaSeedFn,
  TournamentSeedFn,
  InvestmentTypeSeedFn,
  InvestmentTournamentSeedFn,
  InvestmentSeedFn,
  TeacherAvailabilitySeedFn,
  LessonSeedFn,
  LessonAttendanceSeedFn,
  FixedValuesSeedFn,
]
async function main() {
  console.log("Start seeding ...");
  console.log("Seeding users ...");

  for (const seed of seedData) {
    await seed(prismaClient);
  }
}

main()
  .catch(async (e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
