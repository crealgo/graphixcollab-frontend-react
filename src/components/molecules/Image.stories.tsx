import { StoryObj, type Meta, type StoryFn } from "@storybook/react";
import { Image } from "@components/Image";
import type { ImageProps } from "@components/Image";

export default {
	component: Image,
} as Meta;

export const Default: StoryObj<ImageProps> = {
	args: {
		height: "200px",
		width: "200px",
		// ImageElementProps: {
		// 	src: "https://i.picsum.photos/id/237/200/300.jpg",
		// },
	},
};
