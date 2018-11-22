import { GraphQLServer } from 'graphql-yoga';
import { Mutation } from './resolvers/Mutation';
import { Query } from './resolvers/Query';
import { Prisma } from './generated/prisma';
// import { db } from './db';

export function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({
      ...req,
      db: new Prisma({
        debug: true,
        endpoint: process.env.PRISMA_ENDPOINT,
        secret: process.env.APP_SECRET,
      }),
    }),
  });
}
