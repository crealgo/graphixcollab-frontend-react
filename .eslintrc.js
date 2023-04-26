const sharedEsRules = {
	'object-shorthand': 'off',
	'capitalized-comments': 'off',
	'guard-for-in': 'off',
	'implicit-arrow-linebreak': 'off'
};

const sharedTsRules = Object.entries(sharedEsRules).reduce(
	(acc, [key, value]) => {
		acc[`@typescript-eslint/${key}`] = value;
		return acc;
	},
	{}
);

module.exports = {
	root: true,
	env: {
		browser: true
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	plugins: ['editorconfig', 'sonarjs'],
	extends: [
		'eslint:recommended',
		'xo',
		'xo-react',
		'plugin:prettier/recommended'
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function'
			}
		],
		'react/no-array-index-key': 'off',
		'react/require-default-props': 'off',
		'implicit-arrow-linebreak': ['error', 'beside'],
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		...sharedEsRules
	},
	overrides: [
		{
			files: ['*.json'],
			plugins: ['json'],
			extends: ['plugin:json/recommended']
		},
		{
			files: ['tokens/**/*.js'],
			env: {
				node: true
			},
			rules: {
				'sonarjs/no-duplicate-string': 'off'
			}
		},
		{
			files: ['*.@(yml|yaml)'],
			plugins: ['yaml'],
			extends: ['plugin:yaml/recommended']
		},
		{
			files: ['*.@(ts|tsx)'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: ['./tsconfig.json']
			},
			plugins: ['@typescript-eslint'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'xo-typescript',
				'plugin:prettier/recommended'
			],
			rules: {
				'@typescript-eslint/ban-types': 'off',
				'@typescript-eslint/consistent-type-assertions': 'off',
				'@typescript-eslint/naming-convention': 'off',
				...sharedTsRules
			}
		},
		{
			files: ['src/**/*.stories.@(ts|tsx)'],
			extends: ['plugin:storybook/recommended'],
			rules: {
				'react-hooks/rules-of-hooks': 'off',
				...sharedTsRules
			}
		}
	],
	ignorePatterns: ['*.md', '*.mdx']
};
