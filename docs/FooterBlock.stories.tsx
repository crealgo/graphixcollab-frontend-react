import {FooterBlock, type FooterBlockProps} from '@components/FooterBlock';
import {type Meta, type Story} from '@storybook/react';
import {generateFooter} from '@utils/chance';

export default {
	component: FooterBlock
} as Meta;

export const Default: Story<FooterBlockProps> = (args) => <FooterBlock {...args} />;

Default.args = generateFooter();
