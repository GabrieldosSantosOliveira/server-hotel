/*
  Warnings:

  - You are about to drop the `Facilities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Facilities" DROP CONSTRAINT "Facilities_stillId_fkey";

-- DropTable
DROP TABLE "Facilities";

-- CreateTable
CREATE TABLE "Facilitie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Facilitie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StillFacilities" (
    "id" TEXT NOT NULL,
    "stillId" TEXT NOT NULL,
    "facilitieId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StillFacilities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Facilitie_title_key" ON "Facilitie"("title");

-- AddForeignKey
ALTER TABLE "StillFacilities" ADD CONSTRAINT "StillFacilities_stillId_fkey" FOREIGN KEY ("stillId") REFERENCES "Still"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StillFacilities" ADD CONSTRAINT "StillFacilities_facilitieId_fkey" FOREIGN KEY ("facilitieId") REFERENCES "Facilitie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
