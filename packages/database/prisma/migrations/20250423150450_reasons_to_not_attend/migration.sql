/*
  Warnings:

  - The `tier` column on the `athlete` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tier` column on the `lesson` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `reason` column on the `lesson_attendance` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "tier" AS ENUM ('A', 'B', 'C', 'D');

-- CreateEnum
CREATE TYPE "reasons_to_not_attend" AS ENUM ('climatic', 'health', 'cancelled', 'no_teacher', 'no_justification');

-- AlterTable
ALTER TABLE "athlete" DROP COLUMN "tier",
ADD COLUMN     "tier" "tier" NOT NULL DEFAULT 'D';

-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "tier",
ADD COLUMN     "tier" "tier" NOT NULL DEFAULT 'D';

-- AlterTable
ALTER TABLE "lesson_attendance" DROP COLUMN "reason",
ADD COLUMN     "reason" "reasons_to_not_attend";

-- DropEnum
DROP TYPE "Tier";
