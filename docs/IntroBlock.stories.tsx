import {type Story} from '@storybook/react';
import {generateIntroBlock} from '@utils/chance';
import {IntroBlock, type IntroBlockProps} from '@components/IntroBlock';

export default {
	component: IntroBlock
};

export const Default: Story<IntroBlockProps> = (args) => <IntroBlock {...args} />;

Default.args = generateIntroBlock();
