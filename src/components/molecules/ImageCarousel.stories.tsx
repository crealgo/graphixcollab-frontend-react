import { type StoryFn, type Meta } from '@storybook/react';
import { ImageCarousel } from '@components/ImageCarousel';
import { chance } from '@utils/chance';

export default {
  component: ImageCarousel,
} as Meta;

export const Default = {
  argTypes: {
    height: {
      control: { type: 'number' },
      defaultValue: 300,
    },
    width: {
      control: { type: 'number' },
      defaultValue: 300,
    },
    autoplay: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    images: {
      control: { type: 'object' },
      defaultValue: imageList,
    },
    tilt: {
      defaultValue: undefined,
    },
    currentIndex: {
      control: { type: 'number' },
      min: 0,
      max: imageList.length - 1,
    },
    interactive: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

const imageList = Array.from({ length: 5 }, () => chance.url({ extensions: ['png', 'jpeg'] }));
