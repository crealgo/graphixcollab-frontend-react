import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/providers/ThemeProvider";
import colors from "tailwindcss/colors";

export default {
	parameters: {
		backgrounds: {
			default: "slate",
			values: [
				{
					name: "slate",
					value: colors.slate[100],
				},
				{
					name: "dark",
					value: colors.slate[900],
				},
			],
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
