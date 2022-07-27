/*
  Warnings:

  - You are about to drop the `advisor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `faculty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `major` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `school` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "advisor" DROP CONSTRAINT "advisor_faculty_id_fkey";

-- DropForeignKey
ALTER TABLE "advisor" DROP CONSTRAINT "advisor_student_id_fkey";

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_instructor_id_fkey";

-- DropForeignKey
ALTER TABLE "department" DROP CONSTRAINT "department_school_id_fkey";

-- DropForeignKey
ALTER TABLE "faculty" DROP CONSTRAINT "faculty_department_id_fkey";

-- DropForeignKey
ALTER TABLE "major" DROP CONSTRAINT "major_department_id_fkey";

-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_major_id_fkey";

-- DropTable
DROP TABLE "advisor";

-- DropTable
DROP TABLE "course";

-- DropTable
DROP TABLE "department";

-- DropTable
DROP TABLE "faculty";

-- DropTable
DROP TABLE "major";

-- DropTable
DROP TABLE "school";

-- DropTable
DROP TABLE "student";

-- CreateTable
CREATE TABLE "projectile_point" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "named_for" TEXT,
    "year_identified" INTEGER,
    "type_site" TEXT,
    "glacial_period" TEXT,
    "cultural_period" TEXT,
    "culture" TEXT,
    "phase" TEXT,
    "tradition" TEXT,
    "date_info" TEXT,
    "variant" TEXT,
    "short_for" TEXT,
    "cluster" TEXT,
    "point_validity" TEXT,
    "description" TEXT,

    CONSTRAINT "projectile_point_pkey" PRIMARY KEY ("id")
);
