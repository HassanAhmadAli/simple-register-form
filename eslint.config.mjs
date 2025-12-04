import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "args": "all",
          "argsIgnorePattern": "(React|e|error|set|get|state|^_)",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "(React|e|error|set|get|state|^_)",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "(React|e|error|set|get|state|^_)",
          "ignoreRestSiblings": true
        }
      ],
      "@typescript-eslint/no-explicit-any": [
        "warn",
        {
          "fixToUnknown": true
        }
      ],
      "@typescript-eslint/consistent-type-imports": "warn",
      "react/react-in-jsx-scope": "off"
    }
  }
]);
export default config;