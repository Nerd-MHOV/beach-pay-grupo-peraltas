/*
  Warnings:

  - You are about to drop the column `athlete_id` on the `investment` table. All the data in the column will be lost.
  - You are about to drop the column `investment_group_id` on the `investment` table. All the data in the column will be lost.
  - You are about to drop the `athlete` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `investment_group` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `member_id` to the `investment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "arena" DROP CONSTRAINT "arena_address_id_fkey";

-- DropForeignKey
ALTER TABLE "athlete" DROP CONSTRAINT "athlete_address_id_fkey";

-- DropForeignKey
ALTER TABLE "investment" DROP CONSTRAINT "investment_athlete_id_fkey";

-- DropForeignKey
ALTER TABLE "investment" DROP CONSTRAINT "investment_investment_group_id_fkey";

-- DropForeignKey
ALTER TABLE "investment_group" DROP CONSTRAINT "investment_group_athlete_id_fkey";

-- DropForeignKey
ALTER TABLE "investment_group" DROP CONSTRAINT "investment_group_pair_id_fkey";

-- DropForeignKey
ALTER TABLE "investment_group" DROP CONSTRAINT "investment_group_tournament_id_fkey";

-- DropForeignKey
ALTER TABLE "lesson" DROP CONSTRAINT "lesson_teacher_id_fkey";

-- DropForeignKey
ALTER TABLE "lesson_attendance" DROP CONSTRAINT "lesson_attendance_student_id_fkey";

-- DropForeignKey
ALTER TABLE "teacher_availability" DROP CONSTRAINT "teacher_availability_teacher_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_teacher_id_name_fkey";

-- AlterTable
ALTER TABLE "investment" DROP COLUMN "athlete_id",
DROP COLUMN "investment_group_id",
ADD COLUMN     "investment_tournament_id" TEXT,
ADD COLUMN     "member_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "athlete";

-- DropTable
DROP TABLE "investment_group";

-- CreateTable
CREATE TABLE "member" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "responsible" TEXT,
    "date_start" TIMESTAMP(3) NOT NULL,
    "pix_key" TEXT NOT NULL,
    "cpf" TEXT,
    "address_id" TEXT,
    "is_student" BOOLEAN NOT NULL DEFAULT false,
    "is_associated" BOOLEAN NOT NULL DEFAULT false,
    "is_teacher" BOOLEAN NOT NULL DEFAULT false,
    "is_athlete" BOOLEAN NOT NULL DEFAULT false,
    "tier" "tier" NOT NULL DEFAULT 'D',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investment_tournament" (
    "id" TEXT NOT NULL,
    "athlete_id" TEXT NOT NULL,
    "pair_id" TEXT,
    "tournament_id" TEXT NOT NULL,
    "podium" TEXT NOT NULL,
    "description" TEXT,
    "pair_amount" INTEGER NOT NULL,
    "km" DOUBLE PRECISION,
    "km_racional" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "investment_tournament_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_name_key" ON "member"("name");

-- CreateIndex
CREATE UNIQUE INDEX "member_address_id_key" ON "member"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "member_id_name_key" ON "member"("id", "name");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_teacher_id_name_fkey" FOREIGN KEY ("teacher_id", "name") REFERENCES "member"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member" ADD CONSTRAINT "member_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investment" ADD CONSTRAINT "investment_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investment" ADD CONSTRAINT "investment_investment_tournament_id_fkey" FOREIGN KEY ("investment_tournament_id") REFERENCES "investment_tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investment_tournament" ADD CONSTRAINT "investment_tournament_athlete_id_fkey" FOREIGN KEY ("athlete_id") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investment_tournament" ADD CONSTRAINT "investment_tournament_pair_id_fkey" FOREIGN KEY ("pair_id") REFERENCES "member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investment_tournament" ADD CONSTRAINT "investment_tournament_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arena" ADD CONSTRAINT "arena_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacher_availability" ADD CONSTRAINT "teacher_availability_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson_attendance" ADD CONSTRAINT "lesson_attendance_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
