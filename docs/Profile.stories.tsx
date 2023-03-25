import {type Story} from '@storybook/react';
import {generatePerson} from '@utils/chance';
import {Profile, type ProfileProps} from '@components/Profile';

export default {
	component: Profile
};

export const Default: Story<ProfileProps> = (args) => <Profile {...args} />;

Default.args = {
	profile: generatePerson()
};
