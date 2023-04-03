import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "@components/ThemeProvider";

export default {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
} satisfies Preview;
