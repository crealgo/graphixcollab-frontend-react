import { StoryObj } from "@storybook/react";
import { generateFanServiceBlock } from "../../utils/chance";
import { FanServiceBlock, type FanServiceBlockProps } from "./FanServiceBlock";

export default {
	component: FanServiceBlock,
};

export const Default: StoryObj<FanServiceBlockProps> = {
	args: generateFanServiceBlock(),
};
