/*
  Warnings:

  - You are about to drop the column `member_id` on the `investment` table. All the data in the column will be lost.
  - Added the required column `athlete_id` to the `investment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "investment" DROP CONSTRAINT "investment_member_id_fkey";

-- AlterTable
ALTER TABLE "investment" DROP COLUMN "member_id",
ADD COLUMN     "athlete_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "investment" ADD CONSTRAINT "investment_athlete_id_fkey" FOREIGN KEY ("athlete_id") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
