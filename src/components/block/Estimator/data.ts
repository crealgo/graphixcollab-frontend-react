import { generateValuesFromStringArray } from '../../../utils/generateValuesFromStringArray';

export const materials = generateValuesFromStringArray(
	'T-shirt',
	'Hoodie',
	'Sash',
	'Poster',
	'Sticker'
);

export const services = generateValuesFromStringArray('Embroidery', 'Print');

export const serviceContent = generateValuesFromStringArray(
	'Image',
	'Name',
	'Initials',
	'Quote'
);
