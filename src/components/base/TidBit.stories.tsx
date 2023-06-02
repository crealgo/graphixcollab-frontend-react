import { TidBit, type TidBitProps } from './TidBit';
import { SiYelp } from '@icons-pack/react-simple-icons';
import { type Meta, type StoryObj } from '@storybook/react';

export default {
	component: TidBit
} satisfies Meta;

export const Default: StoryObj<TidBitProps> = {
	args: {
		children: (
			<>
				Trusted by <strong>150+</strong> on <strong>Yelp</strong>
			</>
		),
		icon: <SiYelp />
	}
};
