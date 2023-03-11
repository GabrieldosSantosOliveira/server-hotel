/*
  Warnings:

  - Added the required column `description` to the `Still` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Still" ADD COLUMN     "description" TEXT NOT NULL;
