import { FlatCompat } from "@eslint/eslintrc";

// Instancia o compat para configurar com o ESLint no formato flat
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  // Configurações de Next.js
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
  }),

  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      eqeqeq: "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
];

export default eslintConfig;
