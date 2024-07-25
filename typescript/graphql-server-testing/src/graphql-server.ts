import { ApolloServer, BaseContext } from "@apollo/server";
import { typeDefs } from "./type-defs";
import { getResolvers } from "./resolvers";
import { IBooksDao } from "./dao/books";

export type Server = ApolloServer<BaseContext>;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
export const serverFactory = (booksDao: IBooksDao): Server =>
  new ApolloServer({
    typeDefs,
    resolvers: getResolvers(booksDao),
  });
