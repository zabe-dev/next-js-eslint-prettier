import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ["next/core-web-vitals", "next/typescript", "prettier"],
		plugins: ["check-file"],
		rules: {
			semi: "error",
			quotes: ["error", "double"],
			"no-unused-vars": "warn",
			"no-console": "warn",
			"prefer-template": "error",
			"prefer-arrow-callback": "error",
			"check-file/filename-naming-convention": [
				"error",
				{
					"**/*.{js,jsx,ts,tsx}": "KEBAB_CASE",
				},
				{ ignoreMiddleExtensions: true },
			],
			"check-file/folder-naming-convention": [
				"error",
				{ "src/**/!(__tests__)": "KEBAB_CASE" },
			],
		},
	}),
	{
		ignores: [
			"node_modules/**",
			".next/**",
			"out/**",
			"build/**",
			"next-env.d.ts",
		],
	},
];

export default eslintConfig;
