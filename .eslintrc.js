module.exports = {
	env: {
		browser: true,
		es6: true,
	},

	overrides: [
		{
			extends: ["vuepress", "prettier"],
			plugins: ["vue", "prettier"],
			files: ["*.js", "*.vue"],
			parser: "@babel/eslint-parser",
			parserOptions: {
				ecmaVersion: 2018,
				requireConfigFile: false,
				sourceType: "module",
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
				"markdownlint/md025": ["error", { front_matter_title: "" }],
			},
		},
	],
};
