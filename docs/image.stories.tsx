import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { Image, type ImageProps } from '@components/Image';

export default {
  component: Image,
} as Meta<ImageProps>;

export const Default: StoryObj<ImageProps> = {
  args: {
    height: '200px',
    width: '200px',
    ImageElementProps: {
      src: 'https://i.picsum.photos/id/237/200/300.jpg',
    },
  },
};
