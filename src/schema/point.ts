import { ObjectType, InputType, Field, ID } from "type-graphql";

@ObjectType()
export class Point {
  @Field()
  name!: string;

  @Field(() => ID)
  name_id!: string;

  @Field({ nullable: true })
  date_info: string;

  @Field({ nullable: true })
  culture: string;

  @Field({ nullable: true })
  tradition: string;

  @Field({ nullable: true })
  phase: string;

  @Field({ nullable: true })
  glacial_period: string;

  @Field({ nullable: true })
  cultural_period: string;

  @Field({ nullable: true })
  description: string;

  @Field((type) => [String])
  aka: string[];

  @Field({ nullable: true })
  year_range_start: number;

  @Field({ nullable: true })
  year_range_start_type: string;

  @Field({ nullable: true })
  year_range_end: number;

  @Field({ nullable: true })
  year_range_end_type: string;
}
