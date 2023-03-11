/*
  Warnings:

  - You are about to drop the column `size` on the `Still` table. All the data in the column will be lost.
  - Added the required column `bathroomNumber` to the `Still` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedNumber` to the `Still` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sizePerMeter` to the `Still` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Still" DROP COLUMN "size",
ADD COLUMN     "bathroomNumber" INTEGER NOT NULL,
ADD COLUMN     "bedNumber" INTEGER NOT NULL,
ADD COLUMN     "sizePerMeter" INTEGER NOT NULL;
