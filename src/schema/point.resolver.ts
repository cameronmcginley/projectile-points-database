import { Ctx, Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateNewPoint, Point } from "./point";

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

  // Delete point by name_id
  @Mutation(() => Boolean)
  async deletePoint(@Arg("name_id", () => String!) name_id: string) {
    // async deletePost(@Arg("name_id") name_id: string, @Ctx() ctx) {
    await prisma.projectile_point.delete({
      where: {
        name_id: name_id,
      },
    });
    return true;
  }

  // Update point by name_id
  // @Mutation((data) => Point, { nullable: true })
  // async updatePoint(@Arg("data") newPointData: CreateNewPoint): Point {
  @Mutation((data) => Point, { nullable: true })
  async updatePoint(@Arg("data") updated_data: CreateNewPoint): Point {
    // https://www.prisma.io/docs/concepts/components/prisma-client/crud
    const point = await prisma.projectile_point.update({
      where: {
        name_id: updated_data.name_id,
      },
      data: {
        name: updated_data.name,
        shape: updated_data.shape,
        size: updated_data.size,
        namers: updated_data.namers,
        named_for: updated_data.named_for,
        year_identified: updated_data.year_identified,
        type_site: updated_data.type_site,
        glacial_period: updated_data.glacial_period,
        cultural_period: updated_data.cultural_period,
        year_range_start: updated_data.year_range_start,
        year_range_start_type: updated_data.year_range_start_type,
        year_range_end: updated_data.year_range_end,
        year_range_end_type: updated_data.year_range_end_type,
        short_for: updated_data.short_for,
        aka: updated_data.aka,
        point_validity: updated_data.point_validity,
        description: updated_data.description,
      },
    });
    return point;
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
