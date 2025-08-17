import js from "@eslint/js";
import globals from "globals";
import functional from "eslint-plugin-functional";

export default [
  js.configs.recommended,
  functional.configs.externalVanillaRecommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { 
      globals: globals.browser,
      ecmaVersion: 2022,
      sourceType: "module"
    },
    plugins: {
      functional
    },
    rules: {
      // Functional programming rules to prevent mutations
      "no-param-reassign": ["error", { "props": true }],
      "prefer-const": "error",
      "no-var": "error",
      "no-implicit-globals": "error",
      
      // Encourage functional patterns
      "array-callback-return": "error",
      "no-loop-func": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      
      // Prevent common mutation patterns
      "no-delete-var": "error",
      "no-global-assign": "error",
      "no-implicit-coercion": "error",
      
      // Additional immutability enforcement
      "no-extend-native": "error",
      "no-proto": "error",
      
      // Functional plugin rules for immutability
      "functional/no-let": "error",
      "functional/immutable-data": "error",
      "functional/no-method-signature": "off"
    },
  },
];
