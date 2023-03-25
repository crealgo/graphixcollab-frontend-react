import {type Meta, type Story} from '@storybook/react';
import {generateEmployee} from '@utils/chance';
import {ProfileCard, type ProfileCardProps} from '@components/ProfileCard';

export default {
	component: ProfileCard,
	decorators: [
		(Story) => (
			<div style={{maxWidth: 300}}>
				<Story />
			</div>
		)
	]
} as Meta;

export const Default: Story<ProfileCardProps> = (args) => <ProfileCard {...args} />;

Default.args = {
	profile: generateEmployee()
};
