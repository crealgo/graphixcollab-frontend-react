import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { generateTimelineBlock } from '@utils/chance';
import { TimelineBlock, type TimelineBlockProps } from '@components/TimelineBlock';

export default {
  component: TimelineBlock,
} as Meta;

export const Default: StoryObj<TimelineBlockProps> = {
  args: generateTimelineBlock(),
};
