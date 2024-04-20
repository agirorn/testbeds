# Unit tests using jest in TypeScript

This project is a fully configured TypeScript project with one test in
tests/sum.test.ts that you can use to start playing with uniting.

## Tools used by this project

* [Jest](https://jestjs.io/) is a delightful JavaScript Testing Framework with
  a focus on simplicity.
* [TypeScript](https://www.typescriptlang.org/) is JavaScript with syntax for
  types.
* [Yardman](https://github.com/agirorn/yardman) The one that maintains the
  development yard. Watching files and running commands.

## Setup

```
pnpm install
```

## Usage

### Running the tests

The command below will execute the test suite

```
pnpm run test
```

### Auto run the tests on save

The command below will start yardman and execute the tests once and re-execte
the tests suite every time you save a file in the project.

```
pnpm run dev
```
