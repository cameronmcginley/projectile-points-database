import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Course {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;

  @Field()
  instructor!: string;
}
