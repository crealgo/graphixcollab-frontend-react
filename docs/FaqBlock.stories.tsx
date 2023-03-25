import {FaqBlock, type FaqBlockProps} from '@components/FaqBlock';
import {type Meta, type Story} from '@storybook/react';
import {generateFaqBlock} from '@utils/chance';

export default {
	component: FaqBlock
} as Meta;

export const Default: Story<FaqBlockProps> = (args) => <FaqBlock {...args} />;

Default.args = generateFaqBlock();
