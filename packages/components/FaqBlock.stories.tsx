import {type StoryObj, type Meta} from '@storybook/react';
import {generateFaqBlock} from '@graphixcollab/utils/chance';
import {FaqBlock, type FaqBlockProps} from './FaqBlock';

export default {
	component: FaqBlock,
} as Meta;

export const Default: StoryObj<FaqBlockProps> = {
	args: generateFaqBlock(),
};
