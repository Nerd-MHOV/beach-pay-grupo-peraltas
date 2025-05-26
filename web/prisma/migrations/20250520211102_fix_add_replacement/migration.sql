/*
  Warnings:

  - You are about to drop the column `replacement_id` on the `lesson_attendance` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "lesson_attendance" DROP CONSTRAINT "lesson_attendance_replacement_id_fkey";

-- DropIndex
DROP INDEX "lesson_attendance_replacement_id_key";

-- AlterTable
ALTER TABLE "lesson_attendance" DROP COLUMN "replacement_id";
