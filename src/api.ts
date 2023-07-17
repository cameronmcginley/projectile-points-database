// Entry point to the api
import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";
import { getSdk } from "./generated/graphql";

const gqlClient = new GraphQLClient(
  "https://projectile-points-database.vercel.app/api/graphql"
);

// Queries from generated graphql
export const {
  getPoints,
  getPointByName,
  createPoint,
  deletePoint,
  updatePoint,
} = getSdk(gqlClient);

// Shared between server and client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
