import { createRequire } from "node:module";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

const require = createRequire(import.meta.url);
const eslintConfigNext = require("eslint-config-next");

/** @type {import("eslint").Linter.Config[]} */
const config = [
  ...eslintConfigNext,
  eslintConfigPrettier,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "no-console": "warn",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      // Next 16 / react-hooks 7: legitimate patterns (close menu on route, admin gate)
      "react-hooks/set-state-in-effect": "off",
      curly: ["warn", "all"],
      "no-confusing-arrow": ["warn", { allowParens: false }],
      "operator-linebreak": "off",
      "no-prototype-builtins": "warn",
      "no-extra-boolean-cast": "warn",
      "no-useless-escape": "warn",
      "no-useless-catch": "warn",
      "object-shorthand": "warn",
      "prefer-const": "warn",
      "prefer-template": "warn",
      "import/prefer-default-export": "off",
      "import/no-cycle": "off",
      "react/no-find-dom-node": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];

export default config;
