module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 13,
		sourceType: 'module'
	},
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true
	},
	extends: [
		'next/babel',
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'prettier',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended'
	],
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'no-console': 'warn',
		'react/prop-types': 'off',
		'react/display-name': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-var-requires': 'off',
		indent: ['error', 'tab'],
		'prettier/prettier': [2, { useTabs: true }]
	},
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			typescript: {}
		}
	}
};
