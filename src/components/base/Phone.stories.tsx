import { type StoryObj, type Meta } from '@storybook/react';
import { Phone, type PhoneProps } from './Phone';

export default {
	component: Phone,
	decorators: [
		Story => (
			<div style={{ maxWidth: 400 }}>
				<Story />
			</div>
		)
	]
} as Meta;

export const Default: StoryObj<PhoneProps> = {
	argTypes: {
		elevation: {
			control: { type: 'number' },
			defaultValue: 20
		}
	}
};
