import {type Meta, type Story} from '@storybook/react';
import {CalloutBlock, type CalloutBlockProps} from '@components/CalloutBlock';
import {generateCalloutBlock} from '@utils/chance';

export default {
	component: CalloutBlock
} as Meta;

export const Default: Story<CalloutBlockProps> = (args) => <CalloutBlock {...args} />;

Default.args = generateCalloutBlock();
