import { ObjectType, InputType, Field, ID } from "type-graphql";

@ObjectType()
export class Point {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field(() => ID)
  name_id!: string;
}
