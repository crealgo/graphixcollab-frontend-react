// @ts-check

const material = require('@mui/material');
const generateColorVariants = require('../utils/generateColorVariants');
const f = require('../utils/formatToken');
const generateSequenceFromColorScale = require('../utils/generateSequenceFromColorScale');

const grayScale = generateSequenceFromColorScale(material.colors.blueGrey);

// taken from tailwind spacing
const size = generateSequenceFromColorScale({
	px: '1px',
	0: '0',
	0.5: '0.125rem',
	1: '0.25rem',
	1.5: '0.375rem',
	2: '0.5rem',
	2.5: '0.625rem',
	3: '0.75rem',
	3.5: '0.875rem',
	4: '1rem',
	5: '1.25rem',
	6: '1.5rem',
	7: '1.75rem',
	8: '2rem',
	9: '2.25rem',
	10: '2.5rem',
	11: '2.75rem',
	12: '3rem',
	14: '3.5rem',
	16: '4rem',
	20: '5rem',
	24: '6rem',
	28: '7rem',
	32: '8rem',
	36: '9rem',
	40: '10rem',
	44: '11rem',
	48: '12rem',
	52: '13rem',
	56: '14rem',
	60: '15rem',
	64: '16rem',
	72: '18rem',
	80: '20rem',
	96: '24rem'
});

const color = {
	white: f('#FFFFFF'),
	black: f('#000000'),
	brand: {
		cyan: generateColorVariants('#00aad2'),
		magenta: generateColorVariants('#d40072'),
		yellow: generateColorVariants('#edb700'),
		key: generateColorVariants('#111827'),

		// as a hierarchy
		primary: generateColorVariants('#00aad2'),
		secondary: generateColorVariants('#d40072'),
		tertiary: generateColorVariants('#edb700'),
		text: '{color.white}',

		// other brands
		yelp: f('#af0606'),
		facebook: f('#1877f2'),
		twitter: f('#1da1f2'),
		instagram: f('#c13584'),
		square: f('#28c101')
	},
	feedback: {
		success: generateColorVariants(material.colors.green[600]),
		error: generateColorVariants(material.colors.red[600]),
		warning: generateColorVariants(material.colors.amber[600]),
		info: generateColorVariants(material.colors.blue[600])
	},
	gray: grayScale,
	text: {
		primary: f(material.colors.blueGrey[900]),
		secondary: f(material.colors.blueGrey[400]),
		contrast: f('{color.white}')
	}
};

const shape = {
	rounding: {
		none: f('0'),
		small: f('0.25rem'),
		medium: f('0.5rem'),
		large: f('0.75rem'),
		xLarge: f('1rem'),
		full: f('9999px')
	},
	aspectRatio: {
		square: f('1 / 1'),
		landscape: f('16 / 9'),
		portrait: f('9 / 16')
	}
};

const type = {
	heading: {
		font: {
			family: f('Inter Tight, Arial, Helvetica, sans-serif'),
			weight: f(600),
			leading: f(1.25),
			// tracking: f('-2px'),
			margin: {
				top: f('3rem'),
				bottom: f('1.39rem')
			},
			size: {
				1: f('4.209rem'),
				2: f('3.157rem'),
				3: f('2.369rem'),
				4: f('1.777rem'),
				5: f('1.333rem'),
				6: f('1rem')
			}
		}
	},
	body: {
		font: {
			family: f('Inter, Arial, Helvetica, sans-serif'),
			weight: f(400),
			leading: {
				small: f(1.375),
				medium: f(1.5),
				large: f(1.75)
			},
			size: {
				small: f('0.875rem'),
				medium: f('1rem'),
				large: f('1.125rem')
			}
		}
	}
};

const elevation = [
	f('none'),
	f('0 1px 2px 0 rgb(0 0 0 / 0.05)'),
	f('0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'),
	f('0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'),
	f('0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'),
	f('0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'),
	f('0 25px 50px -12px rgb(0 0 0 / 0.25)'),
	f('inset 0 2px 4px 0 rgb(0 0 0 / 0.05)')
];

module.exports = {
	color,
	size,
	shape,
	type,
	elevation
};
