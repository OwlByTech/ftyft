/*
  Warnings:

  - You are about to drop the column `recived_emails` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `recived_emails`,
    ADD COLUMN `received_emails` BOOLEAN NULL;
