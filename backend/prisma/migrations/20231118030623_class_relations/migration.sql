/*
  Warnings:

  - You are about to drop the column `courseId` on the `class` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `class` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `class` DROP FOREIGN KEY `Class_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `class` DROP FOREIGN KEY `Class_userId_fkey`;

-- AlterTable
ALTER TABLE `class` DROP COLUMN `courseId`,
    DROP COLUMN `userId`,
    ADD COLUMN `teacherId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
