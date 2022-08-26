/*
  Warnings:

  - You are about to drop the column `canadian_period` on the `projectile_point` table. All the data in the column will be lost.
  - You are about to drop the column `cultural_period` on the `projectile_point` table. All the data in the column will be lost.
  - You are about to drop the column `culture` on the `projectile_point` table. All the data in the column will be lost.
  - You are about to drop the column `glacial_period` on the `projectile_point` table. All the data in the column will be lost.
  - You are about to drop the column `phase` on the `projectile_point` table. All the data in the column will be lost.
  - You are about to drop the column `shape` on the `projectile_point` table. All the data in the column will be lost.
  - You are about to drop the column `tradition` on the `projectile_point` table. All the data in the column will be lost.
  - The `size` column on the `projectile_point` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "projectile_point" DROP COLUMN "canadian_period",
DROP COLUMN "cultural_period",
DROP COLUMN "culture",
DROP COLUMN "glacial_period",
DROP COLUMN "phase",
DROP COLUMN "shape",
DROP COLUMN "tradition",
DROP COLUMN "size",
ADD COLUMN     "size" TEXT[];

-- CreateTable
CREATE TABLE "cultural_period" (
    "projectile_pointName_id" TEXT,
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "cultural_period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shape" (
    "projectile_pointName_id" TEXT,
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "shape_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "glacial_period" (
    "projectile_pointName_id" TEXT,
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "glacial_period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "canadian_period" (
    "projectile_pointName_id" TEXT,
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "canadian_period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "culture" (
    "projectile_pointName_id" TEXT,
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "culture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "environment" (
    "projectile_pointName_id" TEXT,
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "environment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phase" (
    "projectile_pointName_id" TEXT,
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "phase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tradition" (
    "projectile_pointName_id" TEXT,
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "tradition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cultural_period" ADD CONSTRAINT "cultural_period_projectile_pointName_id_fkey" FOREIGN KEY ("projectile_pointName_id") REFERENCES "projectile_point"("name_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shape" ADD CONSTRAINT "shape_projectile_pointName_id_fkey" FOREIGN KEY ("projectile_pointName_id") REFERENCES "projectile_point"("name_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "glacial_period" ADD CONSTRAINT "glacial_period_projectile_pointName_id_fkey" FOREIGN KEY ("projectile_pointName_id") REFERENCES "projectile_point"("name_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "canadian_period" ADD CONSTRAINT "canadian_period_projectile_pointName_id_fkey" FOREIGN KEY ("projectile_pointName_id") REFERENCES "projectile_point"("name_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "culture" ADD CONSTRAINT "culture_projectile_pointName_id_fkey" FOREIGN KEY ("projectile_pointName_id") REFERENCES "projectile_point"("name_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "environment" ADD CONSTRAINT "environment_projectile_pointName_id_fkey" FOREIGN KEY ("projectile_pointName_id") REFERENCES "projectile_point"("name_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phase" ADD CONSTRAINT "phase_projectile_pointName_id_fkey" FOREIGN KEY ("projectile_pointName_id") REFERENCES "projectile_point"("name_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tradition" ADD CONSTRAINT "tradition_projectile_pointName_id_fkey" FOREIGN KEY ("projectile_pointName_id") REFERENCES "projectile_point"("name_id") ON DELETE SET NULL ON UPDATE CASCADE;
