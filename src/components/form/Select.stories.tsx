import { Meta, StoryObj } from "@storybook/react";
import { Select, SelectProps } from "./Select";

export default {
	component: Select,
} as Meta;

export const Default: StoryObj<SelectProps> = {
	args: {
		placeholder: "Start Typing...",
		inputSize: "medium",
		children: (
			<>
				<option value="test">Test Value</option>
				<option value="test-1">Test Value 1</option>
				<option value="test-2">Test Value 2</option>
				<option value="test-3">Test Value 3</option>
			</>
		),
	},
};
