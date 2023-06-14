import { type StoryObj } from '@storybook/react';
import { generateActions } from '../../utils/chance';
import { EstimatorBlock, type EstimatorBlockProps } from './EstimatorBlock';

export default {
	component: EstimatorBlock
};

export const Default: StoryObj<EstimatorBlockProps> = {
	args: {
		actions: generateActions()
	}
};
