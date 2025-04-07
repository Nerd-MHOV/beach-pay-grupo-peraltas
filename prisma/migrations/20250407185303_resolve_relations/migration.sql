/*
  Warnings:

  - A unique constraint covering the columns `[address_id]` on the table `arena` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[address_id]` on the table `athlete` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "arena_address_id_key" ON "arena"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "athlete_address_id_key" ON "athlete"("address_id");
