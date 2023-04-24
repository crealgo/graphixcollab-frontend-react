import {type StoryObj} from '@storybook/react';
import {generateIntroBlock} from '../../utils/chance';
import {IntroBlock, type IntroBlockProps} from './IntroBlock';

export default {
	component: IntroBlock,
};

export const Default: StoryObj<IntroBlockProps> = {
	args: generateIntroBlock(),
};
