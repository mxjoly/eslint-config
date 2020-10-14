# ESLint Config

A shared [ESlint](https://eslint.org/) config for all the [@mxjoly](https://github.com/mxjoly) packages.

## Installation

Get started by running this command in the root of your project:

```bash
yarn add --dev @mxjoly/eslint-config
```

```bash
npm install --save-dev @mxjoly/eslint-config
```

## Usage

If you want to use this config as base in any of your projects you need to create a `.eslintrc` file that extends this config. If you do not have an ESLint config yet, the easiest way is to do that automatically by running the following command in the root folder of your project (where your `package.json` is):

```bash
# create .eslintrc config file
npm @mxjoly/eslint-config
```

This command creates a new `.eslintrc` file for you and adds linting for JavaScript, React/JSX, and TypeScript.

If you already have an ESLint config or if you prefer the manual way, add the following content to your config file:

```json
{
  "extends": ["@mxjoly/eslint-config"]
}
```

Optionally you can also add linting for React/JSX and Typescript:

```json
{
  "extends": [
    "@mxjoly/eslint-config",
    "@mxjoly/eslint-config/react",
    "@mxjoly/eslint-config/typescript"
  ]
}
```

For more information see: http://eslint.org/docs/user-guide/configuring
