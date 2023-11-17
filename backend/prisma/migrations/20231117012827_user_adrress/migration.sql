/*
  Warnings:

  - You are about to drop the column `addressId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_addressId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `addressId`,
    ADD COLUMN `cep` VARCHAR(10) NULL,
    ADD COLUMN `city` VARCHAR(100) NULL,
    ADD COLUMN `number` VARCHAR(10) NULL,
    ADD COLUMN `state` VARCHAR(100) NULL,
    ADD COLUMN `street` VARCHAR(100) NULL;

-- DropTable
DROP TABLE `address`;
