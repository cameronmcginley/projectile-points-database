
This web application provides an easy-to-use interface for tracking projectile points', or arrowheads', archaeological data. Users can search through projectile points and filter against various features, as well as create new projectile points on the webapp or edit existing ones.

Each projectile point has a list of fields that can be filled out, such as timespan, alternate names, or other various facts, that will be listed alongside a description of that point on it's specific page.

I worked on this project mainly to test out GraphQL and Next.js, as I had not used these in project previously.

## Stack

This web app is built on Next.js, a React framework, with TypeScript. PostgreSQL is used for the database, specifically with Prisma to interact with it. GraphQL (TypeGraphQL & Apollo) is used as the API to interact with the database.

The full list of tools are:

- React
- Next.js
  - Full stack React framework
- Node.js
- PostgreSQL
- Prisma
  - ORM for PostgreSQL access
- TypeGraphQL
  - GraphQL framework
- Apollo Server
  - GraphQL server
  - apollo-server-micro
    - Embedded in Next.js server
- React-Query
  - Fetch data from server
- graphql-request
  - GraphQL client
- GraphQL Code Generator
  - Auto-generates code for queries
