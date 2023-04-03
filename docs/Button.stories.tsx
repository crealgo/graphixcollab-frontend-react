import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { StoryObj, type Meta, type StoryFn } from "@storybook/react";
import { Button, type ButtonProps } from "@components/Button";

export default {
	component: Button,
} as Meta;

export const Default: StoryObj<ButtonProps> = {
	args: {
		children: "Example Button",
	},
};
