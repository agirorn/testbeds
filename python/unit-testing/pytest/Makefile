.PHONY: setup
setup:
	pyenv install --skip-existing 3.12.0
	pyenv virtualenv-delete -f unit-testing-pytest
	pyenv virtualenv 3.12.0 unit-testing-pytest
	pip install -r requirements.txt

.PHONY: setup-yardman
setup-yardman:
	pnpm add --global yardman

.PHONY: freeze
freeze:
	pip freeze > requirements.txt

.PHONY: test
test:
	pytest

.PHONY: dev
dev:
	yardman Makefile *.py requirements.txt 'make dev-exec'

.PHONY: dev-exec
dev-exec:
	clear && make test
