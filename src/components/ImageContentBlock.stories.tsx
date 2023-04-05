import { StoryObj, type StoryFn } from '@storybook/react';
import { generateImageContentBlock } from '@utils/chance';
import { ImageContentBlock, type ImageContentBlockProps } from '@components/ImageContentBlock';

export default {
  component: ImageContentBlock,
};

export const Default: StoryObj<ImageContentBlockProps> = {
  args: generateImageContentBlock(),
};
