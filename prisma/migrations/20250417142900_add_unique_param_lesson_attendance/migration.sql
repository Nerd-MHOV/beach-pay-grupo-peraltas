/*
  Warnings:

  - A unique constraint covering the columns `[lesson_id,student_id]` on the table `lesson_attendance` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "lesson_attendance_lesson_id_student_id_key" ON "lesson_attendance"("lesson_id", "student_id");
