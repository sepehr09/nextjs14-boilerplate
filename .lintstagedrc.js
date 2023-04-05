const path = require("path");

/**
 * If you would like to use next lint with lint-staged to run the linter on staged git files,
 * you'll have to add the following to the .lintstagedrc.js file in the root of your project in order to
 * specify usage of the --file flag.
 * @link https://nextjs.org/docs/basic-features/eslint#lint-staged
 */
const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(" --file ")}`;

module.exports = {
  // eslint
  "**/*.{js,jsx,ts,tsx}": [buildEslintCommand],

  // prettier
  "**/*": ["prettier --write --ignore-unknown"],

  // typescript type checking
  "**/*.{ts,tsx,d.ts,cts,d.cts,mts,d.mts}": () => "tsc --project tsconfig.json --pretty"
};
