import {type Story} from '@storybook/react';
import {chance, generateActions} from '@utils/chance';
import {SocialMediaBlock, type SocialMediaBlockProps} from '@components/SocialMediaBlock';

export default {
	component: SocialMediaBlock
};

export const Default: Story<SocialMediaBlockProps> = (args) => <SocialMediaBlock {...args} />;

Default.args = {
	text: chance.twitter(),
	actions: generateActions()
};
