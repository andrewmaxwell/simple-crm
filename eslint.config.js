import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    reactPlugin.configs.flat.recommended, // This is not a plugin object, but a shareable config object
    reactPlugin.configs.flat["jsx-runtime"], // Add this if you are using React 17+
    {
        plugins: { prettier },

        languageOptions: {
            globals: globals.browser,
            parser: tseslint.parser,
            ecmaVersion: "latest",
            sourceType: "module",
        },

        rules: {
            "prettier/prettier": [
                "warn",
                {
                    arrowParens: "avoid",
                    bracketSameLine: true,
                    bracketSpacing: true,
                    overrides: [
                        {
                            files: "*.json",
                            options: {
                                tabWidth: 2,
                            },
                        },
                    ],
                    printWidth: 90,
                    semi: true,
                    singleQuote: false,
                    tabWidth: 4,
                    trailingComma: "all",
                    useTabs: false,
                },
            ],
            "dot-notation": "warn",
            "quote-props": ["warn", "as-needed"],
            "arrow-body-style": ["warn", "as-needed"],
            "object-shorthand": "warn",
            "no-use-before-define": "warn",
            "prefer-destructuring": "warn",
            "no-nested-ternary": "warn",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
