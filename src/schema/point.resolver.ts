import { Resolver, Mutation, Query, Arg, Int, Ctx } from "type-graphql";
import { Point, CreateNewPoint } from "./point";

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

  // Create new point
  @Mutation((data) => Point, { nullable: true })
  async createPoint(@Arg("data") newPointData: CreateNewPoint): Point {
    // https://www.prisma.io/docs/concepts/components/prisma-client/crud
    const point = await prisma.projectile_point.create({
      data: {
        name: newPointData.name,
      },
    });
    return point;
  }
}
