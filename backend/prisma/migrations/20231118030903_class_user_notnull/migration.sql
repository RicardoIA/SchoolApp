/*
  Warnings:

  - Made the column `teacherId` on table `class` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `class` DROP FOREIGN KEY `Class_teacherId_fkey`;

-- AlterTable
ALTER TABLE `class` MODIFY `teacherId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
