-- AlterTable - Drop old columns and add new ones
ALTER TABLE "Lead" DROP COLUMN "travelDate";
ALTER TABLE "Lead" DROP COLUMN "budgetRange";
ALTER TABLE "Lead" ADD COLUMN "travelDateFrom" TIMESTAMP(3);
ALTER TABLE "Lead" ADD COLUMN "travelDateTo" TIMESTAMP(3);
