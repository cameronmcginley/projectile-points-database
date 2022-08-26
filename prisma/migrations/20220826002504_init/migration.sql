/*
  Warnings:

  - You are about to drop the column `cultural_periodId` on the `projectile_point` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "projectile_point" DROP CONSTRAINT "projectile_point_cultural_periodId_fkey";

-- AlterTable
ALTER TABLE "projectile_point" DROP COLUMN "cultural_periodId",
ADD COLUMN     "canadian_period" TEXT[],
ADD COLUMN     "cultural_period" TEXT[],
ADD COLUMN     "culture" TEXT[],
ADD COLUMN     "environment" TEXT[],
ADD COLUMN     "glacial_period" TEXT[],
ADD COLUMN     "phase" TEXT[],
ADD COLUMN     "shape" TEXT[],
ADD COLUMN     "tradition" TEXT[];

-- CreateTable
CREATE TABLE "shape" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "shape_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "glacial_period" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "glacial_period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "canadian_period" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "canadian_period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "culture" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "culture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "environment" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "environment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phase" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "phase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tradition" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "tradition_pkey" PRIMARY KEY ("id")
);
