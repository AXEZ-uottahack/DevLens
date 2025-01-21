import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": "off", // Allow unused variables
      "@typescript-eslint/no-explicit-any": "off", // Allow the 'any' type
      "@typescript-eslint/no-empty-interface": "off", // Allow empty interfaces
      "@typescript-eslint/no-empty-object-type": "off", // Allow implicit return types on functions
      "react-hooks/rules-of-hooks": "off", // Allow React Hooks in unconventional places
      "react-hooks/exhaustive-deps": "off", // Disable warnings for missing dependencies in useEffect
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
    },
  },
];

export default eslintConfig;
