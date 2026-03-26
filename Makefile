.PHONY: format lint syntax code

format:
	npm run format

lint:
	npm run lint

syntax:
	npm run syntax

code:
	npm run format
	npm run lint
	npm run syntax
