import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
    // Configuración global base
    eslint.configs.recommended,

    // Configuración de Prettier
    prettierConfig,

    // Configuración para archivos JavaScript/TypeScript
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
            prettier: prettierPlugin,
        },
        rules: {
            "prettier/prettier": "error",
            "no-console": "warn",
            "no-unused-vars": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
        },
    },

    // Archivos a ignorar (reemplaza .eslintignore)
    {
        ignores: [
            "node_modules/**",
            "dist/**",
            "build/**",
            "coverage/**",
            ".vscode/**",
            "package-lock.json",
            "**/*.d.ts",
        ],
    },
];
