import {generateScaleFromObject} from '../utils/generators';
import {spacing as _spacing, colors} from '../utils/tailwind-values';

// taken from tailwind spacing
const spacing = generateScaleFromObject({..._spacing});

const color = {
	white: colors.white,
	black: colors.stone[900] as string,
	test: '#00aad2 !!has-variants',
	brand: {
		cyan: '#00aad2 !!has-variants',
		magenta: '#d40072 !!has-variants',
		yellow: '#edb700 !!has-variants',
		key: `${colors.stone[950]} !!has-variants`,

		// as a hierarchy
		primary: '#00aad2 !!has-variants',
		secondary: '#d40072 !!has-variants',
		tertiary: '#edb700 !!has-variants',
		text: '{color.white}',

		// other brands
		yelp: '#af0606 !!has-variants',
		facebook: '#1877f2 !!has-variants',
		twitter: '#1da1f2 !!has-variants',
		instagram: '#c13584 !!has-variants',
		square: '#28c101 !!has-variants',
	},
	feedback: {
		success: `${colors.green[600] as string} !!has-variants`,
		error: `${colors.red[600] as string} !!has-variants`,
		warning: `${colors.amber[600] as string} !!has-variants`,
		info: `${colors.blue[600] as string} !!has-variants`,
	},
	gray: generateScaleFromObject(colors.stone),
	text: {
		primary: colors.stone[900] as string,
		secondary: colors.stone[400] as string,
		contrast: '{color.white}',
	},
};

const shape = {
	rounding: {
		none: '0',
		small: '0.25rem',
		medium: '0.5rem',
		large: '0.75rem',
		xLarge: '1rem',
		full: '9999px',
	},
	aspectRatio: {
		square: '1 / 1',
		landscape: '16 / 9',
		portrait: '9 / 16',
	},
};

const typography = {
	heading: {
		font: {
			family: 'Inter Tight, Arial, Helvetica, sans-serif',
			weight: 700,
			leading: 1.25,
			margin: {
				top: '3rem',
				bottom: '1.39rem',
			},
			size: {
				small: {
					1: '2.488rem',
					2: '2.074rem',
					3: '1.728rem',
					4: '1.44rem',
					5: '1.2rem',
					6: '1rem',
				},
				medium: {
					1: '3.052rem',
					2: '2.441rem',
					3: '1.953rem',
					4: '1.563rem',
					5: '1.25rem',
					6: '1rem',
				},
				large: {
					1: '4.209rem',
					2: '3.157rem',
					3: '2.369rem',
					4: '1.777rem',
					5: '1.333rem',
					6: '1rem',
				},
			},
		},
	},
	body: {
		font: {
			family: 'Inter, Arial, Helvetica, sans-serif',
			weight: 400,
			leading: {
				small: 1.375,
				medium: 1.5,
				large: 1.75,
			},
			size: {
				small: '0.875rem',
				medium: '1rem',
				large: '1.125rem',
			},
		},
	},
};

const elevation = {
	inset: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
	0: '0 0 {color.black}',
	1: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
	2: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
	3: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
	4: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
	5: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
	6: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
};

export default {
	color,
	spacing,
	shape,
	type: typography,
	elevation,
};
