-- AlterTable
ALTER TABLE "member" ADD COLUMN     "email" TEXT,
ALTER COLUMN "date_start" DROP NOT NULL,
ALTER COLUMN "pix_key" DROP NOT NULL;
