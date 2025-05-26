/*
  Warnings:

  - A unique constraint covering the columns `[letzplay_id]` on the table `member` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "member" ADD COLUMN     "letzplay_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "member_letzplay_id_key" ON "member"("letzplay_id");
