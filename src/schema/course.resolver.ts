import { Resolver, Mutation, Query, Arg, Int, Ctx } from "type-graphql";
import { Course, CreateNewCourse } from "./course";

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

  // Create new course
  @Mutation((data) => Course, { nullable: true })
  async createCourse(@Arg("data") newCourseData: CreateNewCourse): Course {
    const course = await prisma.course.create({
      data: {
        name: newCourseData.name,
        instructor_id: newCourseData.instructor_id,
        semesters: newCourseData.semesters,
      },
    });
    return course;
  }
}
