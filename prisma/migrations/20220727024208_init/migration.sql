/*
  Warnings:

  - The primary key for the `projectile_point` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `name_id` to the `projectile_point` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projectile_point" DROP CONSTRAINT "projectile_point_pkey",
ADD COLUMN     "name_id" TEXT NOT NULL,
ADD CONSTRAINT "projectile_point_pkey" PRIMARY KEY ("name_id");
