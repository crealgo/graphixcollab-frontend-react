import { Meta, StoryObj } from "@storybook/react";
import { InputGroup, InputGroupProps } from "./InputGroup";

export default {
	component: InputGroup,
} as Meta;

export const Default: StoryObj<InputGroupProps> = {
	args: {
		InputProps: {
			placeholder: "Start Typing...",
			inputSize: "medium",
		},
	},
};
