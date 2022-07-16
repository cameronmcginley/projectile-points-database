import { Resolver, Query, Arg } from "type-graphql";
import { Int } from "type-graphql";
import { Course } from "./courses";

// Use prisma for db
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver(Course)
export class CoursesResolver {
  // Individual
  @Query(() => Course, { nullable: true })
  async course(@Arg("id", () => Int) id: number): Promise<Course | null> {
    // const course = courses.find((course) => course.name === name);
    console.log(id);
    const course = prisma.course.findUnique({
      where: {
        id: id,
      },
    });
    if (course === null) {
      throw new Error("Course not found");
      // console.log("ITS UNDEFINED");
    }

    return course;
  }

  // All
  // @Query(() => [Course])
  // courses(): Course[] {
  //   return courses;
  // }
  @Query(() => [Course])
  async courses() {
    return prisma.course.findMany();
  }
}
