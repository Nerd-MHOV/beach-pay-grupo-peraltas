/*
  Warnings:

  - You are about to drop the column `addressId` on the `athlete` table. All the data in the column will be lost.
  - You are about to drop the column `isAssociated` on the `athlete` table. All the data in the column will be lost.
  - You are about to drop the column `isStudent` on the `athlete` table. All the data in the column will be lost.
  - You are about to drop the column `isTeacher` on the `athlete` table. All the data in the column will be lost.
  - You are about to drop the column `pixKey` on the `athlete` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `athlete` table. All the data in the column will be lost.
  - Added the required column `date_start` to the `athlete` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pix_key` to the `athlete` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "athlete" DROP CONSTRAINT "athlete_addressId_fkey";

-- AlterTable
ALTER TABLE "athlete" DROP COLUMN "addressId",
DROP COLUMN "isAssociated",
DROP COLUMN "isStudent",
DROP COLUMN "isTeacher",
DROP COLUMN "pixKey",
DROP COLUMN "startDate",
ADD COLUMN     "address_id" TEXT,
ADD COLUMN     "date_start" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "is_associated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_student" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_teacher" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "pix_key" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "athlete" ADD CONSTRAINT "athlete_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
