import { type StoryObj, type Meta } from '@storybook/react';
import {
	DualPhoneDisplay,
	type DualPhoneDisplayProps
} from './DualPhoneDisplay';

export default {
	component: DualPhoneDisplay,
	decorators: [
		Story => (
			<div
				style={{
					maxWidth: '40rem'
				}}
			>
				<Story />
			</div>
		)
	]
} as Meta;

export const Default: StoryObj<DualPhoneDisplayProps> = {
	args: {}
};
