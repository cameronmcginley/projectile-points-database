/*
  Warnings:

  - Added the required column `shape` to the `projectile_point` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `projectile_point` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projectile_point" ADD COLUMN     "shape" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;
