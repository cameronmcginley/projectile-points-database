import { Resolver, Mutation, Query, Arg, Int, Ctx } from "type-graphql";
import { Point } from "./point";

// Use prisma for db connection
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver(Point)
export class PointResolver {
  // Get individual point by "name"
  @Query(() => Point, { nullable: true })
  async point(
    @Arg("name_id", () => String) name_param: string
  ): Promise<Point | null> {
    const point = prisma.projectile_point.findUnique({
      where: {
        name_id: name_param,
      },
    });

    return point;
  }

  // Get all points
  @Query(() => [Point])
  async points() {
    return prisma.projectile_point.findMany();
  }
}
