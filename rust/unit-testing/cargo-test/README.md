# Unit tests using cargo test in Rust

This project is a fully configured Python project with one test in
test_sum.py that you can use to start playing with uniting.

## Tools used by this project

* [Rust](https://www.rust-lang.org/) A language empowering everyone to build
  reliable and efficient software.
* [cargo-test](https://doc.rust-lang.org/cargo/commands/cargo-test.html) Execute
  unit and integration tests of a package
* [cargo-watch](https://github.com/watchexec/cargo-watch) Cargo Watch watches
  over your project's source for changes, and runs Cargo commands when they
  occur.

## Setup

```
make setup
```

## Usage

### Running the tests

The command below will execute the test suite

```
cargo test
```

### Auto run the tests on save

The command below will start cargo watch and execute the tests once and re-execte
the tests suite every time you save a file in the project.

```
make dev
```
