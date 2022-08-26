/*
  Warnings:

  - You are about to drop the column `projectile_pointName_id` on the `cultural_period` table. All the data in the column will be lost.
  - You are about to drop the `canadian_period` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `culture` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `environment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `glacial_period` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `phase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shape` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tradition` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cultural_periodId` to the `projectile_point` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "canadian_period" DROP CONSTRAINT "canadian_period_projectile_pointName_id_fkey";

-- DropForeignKey
ALTER TABLE "cultural_period" DROP CONSTRAINT "cultural_period_projectile_pointName_id_fkey";

-- DropForeignKey
ALTER TABLE "culture" DROP CONSTRAINT "culture_projectile_pointName_id_fkey";

-- DropForeignKey
ALTER TABLE "environment" DROP CONSTRAINT "environment_projectile_pointName_id_fkey";

-- DropForeignKey
ALTER TABLE "glacial_period" DROP CONSTRAINT "glacial_period_projectile_pointName_id_fkey";

-- DropForeignKey
ALTER TABLE "phase" DROP CONSTRAINT "phase_projectile_pointName_id_fkey";

-- DropForeignKey
ALTER TABLE "shape" DROP CONSTRAINT "shape_projectile_pointName_id_fkey";

-- DropForeignKey
ALTER TABLE "tradition" DROP CONSTRAINT "tradition_projectile_pointName_id_fkey";

-- AlterTable
ALTER TABLE "cultural_period" DROP COLUMN "projectile_pointName_id";

-- AlterTable
ALTER TABLE "projectile_point" ADD COLUMN     "cultural_periodId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "canadian_period";

-- DropTable
DROP TABLE "culture";

-- DropTable
DROP TABLE "environment";

-- DropTable
DROP TABLE "glacial_period";

-- DropTable
DROP TABLE "phase";

-- DropTable
DROP TABLE "shape";

-- DropTable
DROP TABLE "tradition";

-- AddForeignKey
ALTER TABLE "projectile_point" ADD CONSTRAINT "projectile_point_cultural_periodId_fkey" FOREIGN KEY ("cultural_periodId") REFERENCES "cultural_period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
