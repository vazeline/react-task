module.exports = {
	singleQuote: true,
	printWidth: 140,
	proseWrap: 'always',
	tabWidth: 4,
	useTabs: true,
	trailingComma: 'none',
	bracketSpacing: true,
	jsxBracketSameLine: false,
	semi: false,
	endOfLine: 'auto',
	overrides: [
		{
			files: '*.{json,yml,md}',
			options: {
				tabWidth: 2
			}
		},
		{
			files: '*.{ts,tsx}',
			options: {
				parser: 'typescript'
			}
		}
	]
}
