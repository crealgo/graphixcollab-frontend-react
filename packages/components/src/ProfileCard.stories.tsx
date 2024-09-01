import {type StoryObj, type Meta} from '@storybook/react';
import {generateEmployee} from '@graphixcollab/utils/chance.ts';
import {ProfileCard, type ProfileCardProps} from './ProfileCard';

export default {
	component: ProfileCard,
	decorators: [
		Story => (
			<div style={{maxWidth: 300}}>
				<Story/>
			</div>
		),
	],
} as Meta;

export const Default: StoryObj<ProfileCardProps> = {
	args: {
		profile: generateEmployee(),
	},
};
