import { ServicesBlock, type ServicesBlockProps } from '@components/ServicesBlock';
import { type Meta, type Story } from '@storybook/react';
import { generateServicesBlock } from '@utils/chance';

export default {
	component: ServicesBlock
} as Meta;

export const Default: Story<ServicesBlockProps> = (args) => <ServicesBlock {...args} />;

Default.args = generateServicesBlock();
