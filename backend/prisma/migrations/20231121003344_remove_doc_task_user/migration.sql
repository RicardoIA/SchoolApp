/*
  Warnings:

  - You are about to drop the `studentdocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `studenttask` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `studentdocument` DROP FOREIGN KEY `StudentDocument_documentId_fkey`;

-- DropForeignKey
ALTER TABLE `studentdocument` DROP FOREIGN KEY `StudentDocument_studentId_fkey`;

-- DropForeignKey
ALTER TABLE `studenttask` DROP FOREIGN KEY `StudentTask_studentId_fkey`;

-- DropForeignKey
ALTER TABLE `studenttask` DROP FOREIGN KEY `StudentTask_taskId_fkey`;

-- DropTable
DROP TABLE `studentdocument`;

-- DropTable
DROP TABLE `studenttask`;
