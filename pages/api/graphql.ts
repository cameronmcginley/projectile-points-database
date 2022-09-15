import { ApolloServer } from "apollo-server-micro";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
const cors = require("micro-cors")();
const { send } = require("micro");

// Resolvers
import { PointResolver } from "../../src/schema/point.resolver";

const schema = await buildSchema({
  resolvers: [PointResolver],
});

const server = new ApolloServer({
  schema,
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
  return cors((req: any, res: any) =>
    req.method === "OPTIONS" ? send(res, 200, "ok") : handler(req, res)
  );
}
