import {
	EmojiPeopleTwoTone,
	PaletteTwoTone,
	SchoolTwoTone,
} from '@mui/icons-material';
import {type ElementType} from 'react';

export type ServiceInformation = {
	icon?: ElementType;
	label?: string;
	description?: string;
	cost?: string;
	meta?: string[];
};

export const serviceOptions: ServiceInformation[] = [
	{
		icon: SchoolTwoTone,
		label: 'Grad Sash Design',
		description: 'Design and order a sash with a graphic designer.',
		cost: undefined,
		meta: [
			'Design and order a sash with a graphic designer. ----- This is a service to design a custom sash. One appointment per person/custom sash. ----- Before your appointment, please send us a mock of your desired sash. Use Pride Sash Custom Builder > https://www.pridesash.com/builder/ to design your sash, take a screen shot, and then email to us at graphixcollab@gmail.com.',
		],
	},
	{
		icon: PaletteTwoTone,
		label: 'Graphic Design',
		description:
			'This is a 15 min appointment for graphic designing. $18.00 fee (15 min) is waived if you use our printing/embroidery service.',
		cost: undefined,
		meta: ['15min Appointment', 'in-person [Mon-Sat only]'],
	},
	{
		icon: EmojiPeopleTwoTone,
		label: 'Free Consultation',
		description:
			'This is a 30 min appointment for graphic designing. $18.00 discount if you use our printing/embroidery service.',
		cost: undefined,
		meta: [
			'This is a 30 min appointment for graphic designing. $18.00 discount if you use our printing/embroidery service.',
		],
	},
];
