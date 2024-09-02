import { type Meta, type StoryObj } from '@storybook/react';
import { TidBit, type TidBitProps } from './TidBit';

export default {
	component: TidBit,
} satisfies Meta;

export const Default: StoryObj<TidBitProps> = {
	args: {
		children: (
			<>
				Trusted by <strong>150+</strong> on <strong>Yelp</strong>
			</>
		),
		icon: <i className='bx bxl-yelp'></i>,
	},
};
