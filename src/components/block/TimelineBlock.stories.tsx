import { type StoryObj, type Meta } from '@storybook/react';
import { generateTimelineBlock } from '../../utils/chance';
import { TimelineBlock } from './TimelineBlock';

export default {
	component: TimelineBlock
} as Meta;

export const Default: StoryObj = {
	args: generateTimelineBlock()
};
