install:
		npm ci

start:
		vite

build:
		vite build

preview:
		vite preview

prettier:
		prettier --ignore-path .gitignore --check "**/*.+(js|ts|json)"

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

dev_tools: prettier lint style_lint

fix: prettier_fix lint_fix style_lint_fix
