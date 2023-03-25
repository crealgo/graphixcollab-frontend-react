import {type Story} from '@storybook/react';
import {chance} from '@utils/chance';
import {HighlightBlock, type HighlightBlockProps} from '@components/HighlightBlock';

export default {
	component: HighlightBlock
};

export const Default: Story<HighlightBlockProps> = (args) => <HighlightBlock {...args} />;

Default.args = {
	quote: chance.sentence(),
	quoter: chance.name()
};
