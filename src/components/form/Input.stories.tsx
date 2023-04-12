import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./Input";

export default {
	component: Input,
} as Meta;

export const Default: StoryObj<InputProps> = {
	args: {
		placeholder: "Start Typing...",
		inputSize: "medium",
	},
};
