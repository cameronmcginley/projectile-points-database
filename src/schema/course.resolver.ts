import { Resolver, Query, Arg, Int } from "type-graphql";
import { Course } from "./course";

// Use prisma for db connection
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver(Course)
export class CourseResolver {
  // Get individual course on "id"
  @Query(() => Course, { nullable: true })
  // MUST use "Int" type for @Arg from type-graphql instead of Number
  async course(@Arg("id", () => Int) id_param: number): Promise<Course | null> {
    const course = prisma.course.findUnique({
      where: {
        id: id_param,
      },
    });

    return course;
  }

  // Get all courses
  @Query(() => [Course])
  async courses() {
    return prisma.course.findMany();
  }
}
