/*
  Warnings:

  - You are about to drop the column `closure` on the `lesson` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "lesson_status" AS ENUM ('scheduled', 'canceled', 'completed');

-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "closure",
ADD COLUMN     "status" "lesson_status" NOT NULL DEFAULT 'scheduled';
