install:
		npm ci

start:
		vite

build:
		vite build

preview:
		vite preview

prettier_fix:
		prettier --ignore-path .gitignore --write "**/*.+(js|ts|json)"

lint:
		eslint --ext .js,.ts .

lint_fix:
		eslint --ext .js,.ts . --fix

style_lint:
		stylelint "**/*.{css,scss,sass}"

style_lint_fix:
		stylelint "**/*.{css,scss,sass}" --fix

dev_tools: lint style_lint

fix: prettier_fix lint_fix style_lint_fix
