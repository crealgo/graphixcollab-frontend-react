import { type StoryObj, type Meta } from '@storybook/react';
import { generatePageHeaderBlock } from '../../utils/chance';
import { PageHeaderBlock, type PageHeaderBlockProps } from './PageHeaderBlock';

export default {
	component: PageHeaderBlock
} as Meta;

export const Default: StoryObj<PageHeaderBlockProps> = {
	args: generatePageHeaderBlock()
};
