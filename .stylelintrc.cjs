module.exports = {
	plugins: ['stylelint-prettier'],
	extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-prettier/recommended'],
	rules: {
		'prettier/prettier': true,
		'at-rule-no-unknown': null,
	},
	customSyntax: 'postcss-scss',
	overrides: [
		{
			files: ['**/*.{vue,html}'],
			customSyntax: 'postcss-html',
		},
	],
};
