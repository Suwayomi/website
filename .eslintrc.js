module.exports = {
	env: {
		browser: true,
		es2021: true,
	},

	overrides: [
		{
			extends: ["plugin:vue/essential", "vuepress", "prettier"],
			plugins: ["vue", "prettier"],
			files: ["*.js", "*.vue"],
			parserOptions: {
				parser: "@babel/eslint-parser",
				ecmaVersion: 12,
				sourceType: "module",
				requireConfigFile: false,
			},
			rules: {
				"prettier/prettier": [
					"error",
					{
						endOfLine: "auto",
					},
				],
				"import/no-unresolved": [
					2,
					{
						ignore: ["^@"],
					},
				],
				curly: ["error", "all"],
				"vue/multi-word-component-names": "off",
			},
		},
		{
			files: ["*.md"],
			parser: "eslint-plugin-markdownlint/parser",
			extends: ["plugin:markdownlint/recommended"],
			rules: {
				"markdownlint/md001": ["off"], // header hierarchy
				"markdownlint/md013": ["warn", { line_length: 90 }], // line length limit
				"markdownlint/md024": ["off"], // no two headers with the same text
				"markdownlint/md025": ["error", { front_matter_title: "" }], // h1 != front matter title
				"markdownlint/md033": ["off"], // no inline html
				"markdownlint/md046": ["error", { style: "fenced" }], // code block style
			},
		},
	],
};
