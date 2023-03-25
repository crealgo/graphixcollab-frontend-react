import {type Meta, type Story} from '@storybook/react';
import {Phone, type PhoneProps} from '@components/Phone';

export default {
	component: Phone,
	decorators: [
		(Story) => (
			<div style={{maxWidth: 400}}>
				<Story />
			</div>
		)
	]
} as Meta;

export const Default: Story<PhoneProps> = (args) => <Phone {...args} />;

Default.argTypes = {
	elevation: {
		control: {type: 'number'},
		defaultValue: 20
	}
};
