import {type StoryObj} from '@storybook/react';
import {chance} from '../../utils/chance';
import {HighlightBlock, type HighlightBlockProps} from './HighlightBlock';

export default {
	component: HighlightBlock
};

export const Default: StoryObj<HighlightBlockProps> = {
	args: {
		quote: chance.sentence(),
		quoter: chance.name()
	}
};
