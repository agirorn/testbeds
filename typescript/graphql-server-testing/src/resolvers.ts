import { IBooksDao, IBook } from "./dao/books";
import { BaseContext } from "@apollo/server";
import type { IExecutableSchemaDefinition } from "@graphql-tools/schema";

interface IBooksArgs {
  title?: string;
}

export const getResolvers = (
  booksDao: IBooksDao,
): IExecutableSchemaDefinition<BaseContext>["resolvers"] => ({
  Query: {
    books: (_, { title }: IBooksArgs): IBook[] => {
      return booksDao.get(title);
    },
  },
});
