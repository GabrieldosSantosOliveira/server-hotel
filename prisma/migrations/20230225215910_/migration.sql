/*
  Warnings:

  - You are about to drop the column `facilitieId` on the `StillFacilities` table. All the data in the column will be lost.
  - You are about to drop the `Facilitie` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `facilityId` to the `StillFacilities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StillFacilities" DROP CONSTRAINT "StillFacilities_facilitieId_fkey";

-- AlterTable
ALTER TABLE "StillFacilities" DROP COLUMN "facilitieId",
ADD COLUMN     "facilityId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Facilitie";

-- CreateTable
CREATE TABLE "Facility" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Facility_name_key" ON "Facility"("name");

-- AddForeignKey
ALTER TABLE "StillFacilities" ADD CONSTRAINT "StillFacilities_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
