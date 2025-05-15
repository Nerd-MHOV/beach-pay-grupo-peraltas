-- AlterTable
ALTER TABLE "member" ADD COLUMN     "associated_combined_value" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "class_amount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "class_combined_value" DOUBLE PRECISION NOT NULL DEFAULT 0;
