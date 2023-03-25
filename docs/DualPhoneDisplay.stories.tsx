import {type Meta, type Story} from '@storybook/react';
import {DualPhoneDisplay, type DualPhoneDisplayProps} from '@components/DualPhoneDisplay';

export default {
	component: DualPhoneDisplay,
	decorators: [
		(Story) => (
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

export const Default: Story<DualPhoneDisplayProps> = (args) => <DualPhoneDisplay {...args} />;

Default.args = {};
