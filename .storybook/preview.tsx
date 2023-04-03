import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "@components/ThemeProvider";

export default {
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
} satisfies Preview;
