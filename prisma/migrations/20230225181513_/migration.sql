/*
  Warnings:

  - You are about to drop the column `title` on the `Facilitie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Facilitie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Facilitie` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Facilitie_title_key";

-- AlterTable
ALTER TABLE "Facilitie" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Facilitie_name_key" ON "Facilitie"("name");
