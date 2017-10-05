## About

`es-scripts` is a set of scripts that manages tooling so you can focus on your application and not on configuration of tooling dependencies. These scripts were inspired by [`react-scripts`](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts) to bring a set of standards to be used across frontend projects.

## Getting started

Install `es-scripts` into your project:

````bash
npm install --save-dev es-scripts
````

In your `package.json` file, `es-scripts` can be invoked in the `scripts` section:

````json
{
  "name": "my-package",
  "scripts": {
    "test": "es-scripts test",
    "lint": "es-scripts lint",
    "prettify": "es-scripts format"
  }
}
````

## The Scripts

### `test`

This script invokes the jest test runner using mostly defaults. Use `es-scripts test --watch` to invoke the test runner in `watch` mode. Including options in the "jest" section within the `package.json` allows those options to be merged with the default options that are included in this package.

#### Options

`--watch` - run Jest in watch mode

`--cover` - run Jest with a coverage reporter

`--report` - run Jest with the jest-teamcity-reporter

### `lint`

This script invokes [eslint](https://eslint.org). ESLint is configured to use the recommended rules from the following packages:

[eslint:recommended](https://eslint.org/docs/user-guide/configuring#using-eslintrecommended)

[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react#recommended)

[es-lint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y#difference-between-recommended-and-strict-mode)

### `format`

This script invokes [prettier](https://github.com/prettier/prettier) to format your source code. It will automatically fix any formatting issues it finds. There is one override to enforce a single quotes on all strings. Take a look at the [prettier configuration options](https://github.com/prettier/prettier#options) to get a better idea of what rules prettier enforces.
