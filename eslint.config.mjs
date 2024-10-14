import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ["src/**/*.{ts}"],
  },
  {
    languageOptions: { globals: globals.node },
  },
  {
    ignores: ["dist/*", "prisma/*", "node_modules/*"],
  },
];
