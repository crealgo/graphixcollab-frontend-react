import { StoryObj, type StoryFn } from '@storybook/react';
import { generateFanServiceBlock } from '@utils/chance';
import { FanServiceBlock, type FanServiceBlockProps } from '@components/FanServiceBlock';

export default {
  component: FanServiceBlock,
};

export const Default: StoryObj<FanServiceBlockProps> = {
  args: generateFanServiceBlock(),
};
