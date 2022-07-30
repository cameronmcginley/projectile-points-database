/*
  Warnings:

  - You are about to drop the column `date_info` on the `projectile_point` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `projectile_point` table. All the data in the column will be lost.
  - Made the column `name` on table `projectile_point` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "projectile_point" DROP COLUMN "date_info",
DROP COLUMN "id",
ADD COLUMN     "aka" TEXT[],
ADD COLUMN     "canadian_period" TEXT,
ADD COLUMN     "namers" TEXT[],
ADD COLUMN     "similar_point" TEXT[],
ADD COLUMN     "year_range_end" INTEGER,
ADD COLUMN     "year_range_end_type" TEXT,
ADD COLUMN     "year_range_start" INTEGER,
ADD COLUMN     "year_range_start_type" TEXT,
ALTER COLUMN "name" SET NOT NULL;
