import {type Meta, type StoryObj} from '@storybook/react';
import {HeroBlock, type HeroBlockProps} from './HeroBlock';
import Logo from './Logo';

export default {
	component: HeroBlock,
} as Meta<HeroBlockProps>;

export const Default: StoryObj<HeroBlockProps> = {
	args: {
		title: (
			<>
				Welcome to <Logo/>
			</>
		),
		description: 'We\'re your one-stop shop for all your apparel customization needs. We offer a wide range of services, from garment printing to embroidery.',
		actions: [
			{
				label: 'Book Appointment',
				href: '/book-appointment',
			},
		],
		slides: [
			{title: 'Sashes', src: 'assets/sash-hs-min@1280w.webp', alt: 'Sashes'},
			{title: 'Embroidery', src: 'assets/embroidery-shirts-min@1280w.webp', alt: 'Embroidery'},
			{title: 'T-Shirts', src: 'assets/laughing-group-min@1280w.webp', alt: 'T-Shirts'},
		],
	},
};
