export interface IBook {
  title: string;
  author: string;
}

export const books: IBook[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export interface IBooksArgs {
  title?: string;
}

export interface IBooksDao {
  get(title?: string): IBook[];
}

export class BooksDao implements IBooksDao {
  get(title?: string): IBook[] {
    return title ? books.filter((book) => book.title.includes(title)) : books;
  }
}
