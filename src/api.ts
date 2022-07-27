// Entry point to the api
import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";
import { getSdk } from "./generated/graphql";

const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");

// Queries from generated graphql
export const {
  getPoints,
  getPointByName,
  getCourses,
  getCourseByID,
  createCourse,
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
