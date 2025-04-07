/*
  Warnings:

  - You are about to drop the column `city` on the `address` table. All the data in the column will be lost.
  - Added the required column `city_state` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" RENAME COLUMN "city" TO "city_state";
