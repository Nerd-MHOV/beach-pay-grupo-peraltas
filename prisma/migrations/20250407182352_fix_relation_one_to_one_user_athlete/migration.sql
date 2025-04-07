/*
  Warnings:

  - A unique constraint covering the columns `[id,name]` on the table `athlete` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teacher_id,name]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_teacher_id_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "athlete_id_name_key" ON "athlete"("id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "user_teacher_id_name_key" ON "user"("teacher_id", "name");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_teacher_id_name_fkey" FOREIGN KEY ("teacher_id", "name") REFERENCES "athlete"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
