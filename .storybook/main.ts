import { StorybookConfig } from "@storybook/react-vite";

export default {
	stories: ["../docs"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
	],
	framework: "@storybook/react-vite",
} satisfies StorybookConfig;
