-- AlterTable
ALTER TABLE "User" ADD COLUMN     "resetPasswordExpires" TIMESTAMP(3),
ADD COLUMN     "resetPasswordToken" TEXT,
ADD COLUMN     "validEmailExpires" TIMESTAMP(3),
ADD COLUMN     "validEmailToken" TEXT;
