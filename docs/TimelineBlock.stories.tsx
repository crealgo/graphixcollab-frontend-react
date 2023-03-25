import {type Meta, type Story} from '@storybook/react';
import {generateTimelineBlock} from '@utils/chance';
import {TimelineBlock, type TimelineBlockProps} from '@components/TimelineBlock';

export default {
	component: TimelineBlock
} as Meta;

export const Default: Story<TimelineBlockProps> = (args) => <TimelineBlock {...args} />;

Default.args = generateTimelineBlock();
