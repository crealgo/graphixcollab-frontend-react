import {type Story} from '@storybook/react';
import {generateFanServiceBlock} from '@utils/chance';
import {FanServiceBlock, type FanServiceBlockProps} from '@components/FanServiceBlock';

export default {
	component: FanServiceBlock
};

export const Default: Story<FanServiceBlockProps> = (args) => <FanServiceBlock {...args} />;

Default.args = generateFanServiceBlock();
