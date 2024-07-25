import { describe, expect, test } from "@jest/globals";
import assert from "assert";
import { IBooksDao, IBook } from "../../../src/dao/books";

import { serverFactory } from "../../../src/graphql-server";

describe("Books", () => {
  test("finding a books works", async () => {
    class Dao implements IBooksDao {
      get(title?: string): IBook[] {
        expect(title).toBe("City");
        return [];
      }
    }
    const { body } = await serverFactory(new Dao()).executeOperation({
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
    expect(body.singleResult.data?.books).toEqual([]);
  });

  test("when finding a books fails", async () => {
    class Dao implements IBooksDao {
      get(_title?: string): IBook[] {
        throw new Error("Finding a book failed");
      }
    }
    const { body } = await serverFactory(new Dao()).executeOperation({
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
    assert(body.singleResult.errors);
    expect(body.singleResult.errors[0].message).toBe("Finding a book failed");
  });
});
