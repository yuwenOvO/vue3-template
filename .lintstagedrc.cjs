module.exports = {
	'*.{vue,js,jsx,ts,tsx}': [`eslint . --max-warnings 0 --fix`, 'pretty-quick --staged'],
	'*.{vue,css,less,scss}': ['stylelint --fix --allow-empty-input', 'pretty-quick --staged'],
	'*.md': ['pretty-quick --staged'],
};
