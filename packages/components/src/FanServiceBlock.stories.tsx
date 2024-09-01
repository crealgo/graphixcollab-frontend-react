import {type StoryObj} from '@storybook/react';
import {generateFanServiceBlock} from '@graphixcollab/utils/chance.ts';
import {FanServiceBlock, type FanServiceBlockProps} from './FanServiceBlock';

export default {
	component: FanServiceBlock,
};

export const Default: StoryObj<FanServiceBlockProps> = {
	args: generateFanServiceBlock(),
};
