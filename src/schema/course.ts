import { ObjectType, InputType, Field, ID } from "type-graphql";

@ObjectType()
export class Course {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;

  @Field()
  instructor_id!: number;

  @Field(() => [String])
  semesters!: string[];
}

@InputType({ description: "New course" })
export class CreateNewCourse implements Partial<Course> {
  @Field()
  name!: string;

  @Field()
  instructor_id!: number;

  @Field(() => [String])
  semesters!: string[];
}
