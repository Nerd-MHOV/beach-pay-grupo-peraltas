/*
  Warnings:

  - You are about to drop the column `subject` on the `lesson` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Tier" AS ENUM ('A', 'B', 'C', 'D');

-- AlterTable
ALTER TABLE "athlete" ADD COLUMN     "tier" "Tier" NOT NULL DEFAULT 'D';

-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "subject",
ADD COLUMN     "tier" "Tier" NOT NULL DEFAULT 'D';
