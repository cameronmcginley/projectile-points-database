import { ObjectType, Field, ID } from "type-graphql";

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
