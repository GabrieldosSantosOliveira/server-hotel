/*
  Warnings:

  - You are about to drop the column `userId` on the `Address` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "userId",
ADD COLUMN     "stillId" TEXT;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_stillId_fkey" FOREIGN KEY ("stillId") REFERENCES "Still"("id") ON DELETE SET NULL ON UPDATE CASCADE;
