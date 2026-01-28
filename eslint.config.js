import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
// new
import react from "eslint-plugin-react";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    // new
    plugins: {
      react,
    },
    extends: [
      js.configs.recommended,
      // new
      react.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      // ecmaVersion: 2020,
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        // ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        // sourceType: "module",
      },
    },
    // new
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react/react-in-jsx-scope": "off", 
    },
  },
]);


