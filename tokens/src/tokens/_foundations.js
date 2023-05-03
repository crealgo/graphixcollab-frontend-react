// @ts-check

const colors = require('tailwindcss/colors');
const generateColorVariants = require('../utils/generateColorVariants');
const f = require('../utils/formatToken');
const generateSequenceFromColorScale = require('../utils/generateSequenceFromColorScale');

const grayScale = generateSequenceFromColorScale(colors.slate);

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

module.exports = {
	color: {
		white: f(colors.white),
		black: f(colors.black),
		brand: {
			primary: generateColorVariants('#00aad2'),
			secondary: generateColorVariants('#d40072'),
			tertiary: generateColorVariants('#edb700'),
			text: generateColorVariants('{color.white}'),

			// other brands
			yelp: generateColorVariants('#af0606'),
			facebook: generateColorVariants('#1877f2'),
			twitter: generateColorVariants('#1da1f2'),
			instagram: generateColorVariants('#c13584'),
			square: generateColorVariants('#28c101')
		},
		feedback: {
			success: generateColorVariants(colors.green[600]),
			error: generateColorVariants(colors.red[600]),
			warning: generateColorVariants(colors.amber[600]),
			info: generateColorVariants(colors.blue[600])
		},
		gray: grayScale,
		text: {
			primary: f(colors.slate[900]),
			secondary: f(colors.slate[400])
		}
	},
	size,
	shape: {
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
	},
	elevation: {
		...[
			f('none'),
			f('0 1px 2px 0 rgb(0 0 0 / 0.05)'),
			f('0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'),
			f(
				'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
			),
			f(
				'0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
			),
			f(
				'0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
			),
			f('0 25px 50px -12px rgb(0 0 0 / 0.25)'),
			f('inset 0 2px 4px 0 rgb(0 0 0 / 0.05)')
		]
	}
};
