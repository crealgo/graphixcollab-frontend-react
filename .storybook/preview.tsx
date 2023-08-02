import React from 'react';
import { type Preview } from '@storybook/react';
import { ThemeProvider } from '../src/providers/ThemeProvider';
import tokens from "../tokens/build/tokens.json"

export default {
	parameters: {
		backgrounds: {
			default: 'slate',
			values: [
				{
					name: 'slate',
					value: tokens.color.gray[100]
				},
				{
					name: 'dark',
					value: tokens.color.gray[900]
				}
			]
		}
	},
	decorators: [
		Story => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		)
	]
} satisfies Preview;
