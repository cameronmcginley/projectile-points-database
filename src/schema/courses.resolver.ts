import { Resolver, Query, Arg } from "type-graphql";

import { Course } from "./courses";
import courses from "./courses.json";

// Use prisma for db

@Resolver(Course)
export class CoursesResolver {
  @Query(() => [Course])
  courses(): Course[] {
    return courses;
  }
}
