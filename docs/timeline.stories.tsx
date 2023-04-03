import { StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { generateMilestones } from '@utils/chance';
import { Timeline, type TimelineProps } from '@components/Timeline';

export default {
  component: Timeline,
} as Meta;

export const Default: StoryObj<TimelineProps> = {
  args: {
    milestones: generateMilestones(),
    selectedIndex: 2,
  },
};
