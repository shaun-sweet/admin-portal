"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var Mutation_1 = require("./resolvers/Mutation");
var Query_1 = require("./resolvers/Query");
var prisma_1 = require("./generated/prisma");
// import { db } from './db';
function createServer() {
    return new graphql_yoga_1.GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation: Mutation_1.Mutation,
            Query: Query_1.Query,
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        context: function (req) { return (__assign({}, req, { db: new prisma_1.Prisma({
                debug: true,
                endpoint: process.env.PRISMA_ENDPOINT,
                secret: process.env.APP_SECRET,
            }) })); },
    });
}
exports.createServer = createServer;
//# sourceMappingURL=createServer.js.map