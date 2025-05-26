/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `courts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "courts_number_key" ON "courts"("number");
