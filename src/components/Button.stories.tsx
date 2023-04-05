import { iconMap, iconNameArray } from "@assets/data/iconMap";
import { StoryObj, type Meta, type StoryFn } from "@storybook/react";
import { Button, type ButtonProps } from "@components/Button";

export default {
	component: Button,
} as Meta;

export const Default: StoryObj<ButtonProps> = {
	render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
	args: {
		children: "Example Button",
	},
	argTypes: {
		startIcon: {
			mapping: iconMap,
			options: iconNameArray,
		},
		endIcon: {
			mapping: iconMap,
			options: iconNameArray,
		},
	},
};
