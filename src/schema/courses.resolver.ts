import { Resolver, Query, Arg } from "type-graphql";

import { Course } from "./courses";
import courses from "./courses.json";

// Use prisma for db
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver(Course)
export class CoursesResolver {
  // Individual
  // @Query(() => Course, { nullable: true })
  // course(@Arg("name", () => String) name: string): Course | undefined {
  //   const course = courses.find((course) => course.name === name);
  //   if (course === undefined) {
  //     throw new Error("Course not found");
  //   }
  //   return course;
  // }

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
