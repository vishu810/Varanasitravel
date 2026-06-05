-- AlterTable
ALTER TABLE "Lead" ADD COLUMN "travelFromDate" TIMESTAMP(3),
ADD COLUMN "travelToDate" TIMESTAMP(3);

-- Make budgetRange optional
ALTER TABLE "Lead" ALTER COLUMN "budgetRange" DROP NOT NULL,
ALTER COLUMN "budgetRange" SET DEFAULT NULL;
