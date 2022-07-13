import { ApolloServer } from "apollo-server-micro";
import "reflect-metadata";
import {
  buildSchema,
  Resolver,
  Query,
  Arg,
  ObjectType,
  Field,
  ID,
} from "type-graphql";

@ObjectType()
export class Course {
  @Field(() => ID)
  name: string;
}

@Resolver(Course)
export class CoursesResolver {
  @Query(() => [Course])
  courses(): Course[] {
    return [{ name: "course1-name" }, { name: "course2-name" }];
  }
}

const schema = await buildSchema({
  resolvers: [CoursesResolver],
});

const server = new ApolloServer({
  schema,
  cors: {
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
  },
});

// Dont want nextjs to parse body of the server func
export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

// Request handler
export default async function handler(req: any, res: any) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}
