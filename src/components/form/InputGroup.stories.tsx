import { Meta, StoryObj } from "@storybook/react";
import { InputGroup, InputGroupProps } from "./InputGroup";
import { Autocomplete } from "./Autocomplete";
import { Input } from "./Input";
import { Button } from "../base/Button";

export default {
	component: InputGroup,
} as Meta;

export const Default: StoryObj<InputGroupProps> = {
	render: ({ InputProps, ...args }) => (
		<InputGroup {...args}>
			<Input {...InputProps} />
		</InputGroup>
	),
	args: {
		endContent: (
			<>
				<Button size="medium">Action</Button>
			</>
		),
		InputProps: {
			placeholder: "Start Typing...",
			inputSize: "medium",
		},
	},
};

export const WithAutocomplete: StoryObj<InputGroupProps> = {
	render: ({ InputProps, ...args }) => (
		<InputGroup {...args}>
			<Autocomplete {...InputProps}>
				<option value="test-things">Test Things</option>
				<option value="test-things-1">Test Things 1</option>
				<option value="test-things-2">Test Things 2</option>
				<option value="test-things-3">Test Things 3</option>
			</Autocomplete>
		</InputGroup>
	),
	args: {
		endContent: (
			<>
				<Button size="medium">Action</Button>
			</>
		),
		InputProps: {
			placeholder: "Start Typing...",
			inputSize: "medium",
		},
	},
};
