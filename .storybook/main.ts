import { StorybookConfig } from "@storybook/react-vite";

export default {
	stories: [
		"../src/assets",
		"../src/components",
		"../src/configs",
		"../src/contexts",
		"../src/hooks",
		"../src/layouts",
		"../src/pages",
		"../src/providers",
		"../src/styles",
		"../src/types",
		"../src/utils",
	],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-links",
	],
	framework: "@storybook/react-vite",
} satisfies StorybookConfig;
