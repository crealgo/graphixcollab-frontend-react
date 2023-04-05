import { StoryObj, type Meta } from "@storybook/react";
import { generateHeader } from "../../utils/chance";
import { Header, type HeaderProps } from "./Header";

export default {
	component: Header,
} as Meta;

export const Default: StoryObj<HeaderProps> = {
	args: generateHeader(),
};
