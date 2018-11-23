import { GraphQLServer } from 'graphql-yoga';
import { Mutation } from './resolvers/Mutation';
import { Query } from './resolvers/Query';
import { Prisma } from './generated/prisma';

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
        endpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4466', 
        secret: process.env.APP_SECRET,
      }),
    }),
  });
}
