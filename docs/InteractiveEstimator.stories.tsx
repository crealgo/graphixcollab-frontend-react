import {type Story} from '@storybook/react';
import {generateActions} from '@utils/chance';
import {InteractiveEstimator, type InteractiveEstimatorProps} from '@components/InteractiveEstimator';

export default {
	component: InteractiveEstimator
};

export const Default: Story<InteractiveEstimatorProps> = (args) => <InteractiveEstimator {...args} />;

Default.args = {
	actions: generateActions()
};
