import {type StoryObj, type Meta} from '@storybook/react';
import {generateFooter} from '@graphixcollab/utils/chance.ts';
import {FooterBlock, type FooterBlockProps} from './FooterBlock';

export default {
	component: FooterBlock,
} as Meta;

export const Default: StoryObj<FooterBlockProps> = {
	args: generateFooter(),
};
