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
    // TODO: Return error to user if name_id not unique, and link them to it
    const point = await prisma.projectile_point.create({
      data: {
        name_id: newPointData.name_id,
        name: newPointData.name,
        shape: newPointData.shape,
        size: newPointData.size,
        namers: newPointData.namers,
        named_for: newPointData.named_for,
        year_identified: newPointData.year_identified,
        type_site: newPointData.type_site,
        glacial_period: newPointData.glacial_period,
        cultural_period: newPointData.cultural_period,
        year_range_start: newPointData.year_range_start,
        year_range_start_type: newPointData.year_range_start_type,
        year_range_end: newPointData.year_range_end,
        year_range_end_type: newPointData.year_range_end_type,
        short_for: newPointData.short_for,
        aka: newPointData.aka,
        point_validity: newPointData.point_validity,
        description: newPointData.description,
      },
    });
    return point;
  }
}
