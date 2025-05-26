/*
  Warnings:

  - A unique constraint covering the columns `[replacement_id]` on the table `lesson_attendance` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "lesson_attendance" ADD COLUMN     "replacement_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "lesson_attendance_replacement_id_key" ON "lesson_attendance"("replacement_id");

-- AddForeignKey
ALTER TABLE "lesson_attendance" ADD CONSTRAINT "lesson_attendance_replacement_id_fkey" FOREIGN KEY ("replacement_id") REFERENCES "lesson_attendance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
