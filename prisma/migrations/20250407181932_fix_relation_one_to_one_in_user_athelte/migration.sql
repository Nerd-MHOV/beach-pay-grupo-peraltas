/*
  Warnings:

  - A unique constraint covering the columns `[teacher_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_teacher_id_key" ON "user"("teacher_id");
