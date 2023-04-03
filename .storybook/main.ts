import { StorybookConfig } from "@storybook/react-vite";

export default {
	stories: ["../docs"],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-actions",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-links",
	],
	framework: "@storybook/react-vite",
} satisfies StorybookConfig;
