import {type Story} from '@storybook/react';
import {chance} from '@utils/chance';
import {Quote, type QuoteProps} from '@components/Quote';

export default {
	component: Quote
};

export const Default: Story<QuoteProps> = (args) => <Quote {...args} />;

Default.args = {
	text: chance.sentence()
};
