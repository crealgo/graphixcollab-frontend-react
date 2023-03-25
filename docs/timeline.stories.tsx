import {type Meta, type Story} from '@storybook/react';
import {generateMilestones} from '@utils/chance';
import {Timeline, type TimelineProps} from '@components/Timeline';

export default {
	component: Timeline
} as Meta;

export const Default: Story<TimelineProps> = (args) => <Timeline {...args} />;

Default.args = {
	milestones: generateMilestones(),
	selectedIndex: 2
};
