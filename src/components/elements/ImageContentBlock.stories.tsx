import { StoryObj } from "@storybook/react";
import { generateImageContentBlock } from "../../utils/chance";
import { ImageContentBlock, type ImageContentBlockProps } from "../molecules/ImageContentBlock";

export default {
	component: ImageContentBlock,
};

export const Default: StoryObj<ImageContentBlockProps> = {
	args: generateImageContentBlock(),
};
