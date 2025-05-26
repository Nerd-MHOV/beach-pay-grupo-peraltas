/*
  Warnings:

  - You are about to drop the column `lesson_id` on the `teacher_availability` table. All the data in the column will be lost.
  - Added the required column `teacher_availability_id` to the `lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teacher_availability" DROP CONSTRAINT "teacher_availability_lesson_id_fkey";

-- AlterTable
ALTER TABLE "lesson" ADD COLUMN     "teacher_availability_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "teacher_availability" DROP COLUMN "lesson_id";

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_teacher_availability_id_fkey" FOREIGN KEY ("teacher_availability_id") REFERENCES "teacher_availability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
