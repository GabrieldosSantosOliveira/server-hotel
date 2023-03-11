/*
  Warnings:

  - You are about to drop the `StillFacilities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StillFacilities" DROP CONSTRAINT "StillFacilities_facilityId_fkey";

-- DropForeignKey
ALTER TABLE "StillFacilities" DROP CONSTRAINT "StillFacilities_stillId_fkey";

-- DropTable
DROP TABLE "StillFacilities";

-- CreateTable
CREATE TABLE "StillFacility" (
    "id" TEXT NOT NULL,
    "stillId" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StillFacility_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StillFacility" ADD CONSTRAINT "StillFacility_stillId_fkey" FOREIGN KEY ("stillId") REFERENCES "Still"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StillFacility" ADD CONSTRAINT "StillFacility_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
