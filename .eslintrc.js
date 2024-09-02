export default {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		'xo',
		'xo-react',
		'xo-typescript',
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
			},
		],
		'react/no-array-index-key': 'off',
		'react/require-default-props': 'off',
		'implicit-arrow-linebreak': ['error', 'beside'],
		'no-warning-comme': 'off',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'object-shorthand': 'off',
		'capitalized-comme': 'off',
		'guard-for-in': 'off',
		'implicit-arrow-linebreak': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/await-thenable': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
	},
};
