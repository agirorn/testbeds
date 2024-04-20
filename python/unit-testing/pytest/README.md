# Unit tests using pytest in Python

This project is a fully configured Python project with one test in
test_sum.py that you can use to start playing with uniting.

## Tools used by this project

* [Python](https://www.python.org/)is a programming language that lets you work
  quickly and integrate systems more effectively
* [pytest](https://pytest.org/) helps you write better programs
* [Yardman](https://github.com/agirorn/yardman) The one that maintains the
  development yard. Watching files and running commands.

## Setup

```
make setup
```

## Usage

### Running the tests

The command below will execute the test suite

```
make test
```

### Auto run the tests on save

The command below will start yardman and execute the tests once and re-execte
the tests suite every time you save a file in the project.

```
make dev
```
