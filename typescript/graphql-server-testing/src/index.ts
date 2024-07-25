import { startStandaloneServer } from "@apollo/server/standalone";
import { serverFactory } from "./graphql-server";
import { BooksDao } from "./dao/books";

const server = serverFactory(new BooksDao());
const start = async (): Promise<void> => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at ${url}`);
};

start().then(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
  (error) => {
    console.error(error);
    throw error;
  },
);
