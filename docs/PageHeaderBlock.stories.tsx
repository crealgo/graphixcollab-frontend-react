import { PageHeaderBlock, type PageHeaderBlockProps } from '@components/PageHeaderBlock';
import { type Meta, type Story } from '@storybook/react';
import { generatePageHeaderBlock } from '@utils/chance';

export default {
	component: PageHeaderBlock
} as Meta;

export const Default: Story<PageHeaderBlockProps> = (args) => <PageHeaderBlock {...args} />;

Default.args = generatePageHeaderBlock();
