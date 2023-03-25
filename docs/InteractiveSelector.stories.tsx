import {type Story} from '@storybook/react';
import {generateOptions} from '@utils/chance';
import {InteractiveSelector, type InteractiveSelectorProps} from '@components/InteractiveSelector';

export default {
	component: InteractiveSelector
};

export const Default: Story<InteractiveSelectorProps> = (args) => <InteractiveSelector {...args} />;

Default.args = {
	options: generateOptions()
};
