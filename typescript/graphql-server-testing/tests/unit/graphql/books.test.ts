import { describe, expect, test, beforeEach } from "@jest/globals";
import assert from "assert";
import { Server, serverFactory } from "../../../src/graphql-server";
import { BooksDao } from "../../../src/dao/books";

describe("Books", () => {
  let server: Server;

  beforeEach(() => {
    server = serverFactory(new BooksDao());
  });

  test("get all books", async () => {
    const { body } = await server.executeOperation({
      query: `
        query ExampleQuery {
          books {
            title
          }
        }
      `,
    });

    assert(body.kind === "single");
    expect(body.singleResult.errors).toBeUndefined();
    assert(body.singleResult.data);
    expect(body.singleResult.data.books).toEqual([
      {
        title: "The Awakening",
      },
      {
        title: "City of Glass",
      },
    ]);
  });

  test("get books filterd by title", async () => {
    const { body } = await server.executeOperation({
      query: `
        query ExampleQuery($title: String) {
          books(title: $title) {
            title
          }
        }
      `,
      variables: { title: "City" },
    });

    assert(body.kind === "single");
    expect(body.singleResult.errors).toBeUndefined();
    assert(body.singleResult.data);
    expect(body.singleResult.data.books).toEqual([
      {
        title: "City of Glass",
      },
    ]);
  });
});
