// @ts-check

const tailwind = require('../utils/tailwindValues');
const generateColorVariants = require('../utils/generateColorVariants');
const f = require('../utils/formatToken');
const generateScaleFromObject = require('../utils/generateScaleFromObject');

// taken from tailwind spacing
const spacing = generateScaleFromObject({ ...tailwind.spacing });

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
		success: generateColorVariants(tailwind.colors.green[600]),
		error: generateColorVariants(tailwind.colors.red[600]),
		warning: generateColorVariants(tailwind.colors.amber[600]),
		info: generateColorVariants(tailwind.colors.blue[600])
	},
	gray: generateScaleFromObject(tailwind.colors.stone),
	text: {
		primary: f(tailwind.colors.stone[900]),
		secondary: f(tailwind.colors.stone[400]),
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
			weight: f(700),
			leading: f(1.25),
			margin: {
				top: f('3rem'),
				bottom: f('1.39rem')
			},
			size: {
				small: {
					1: f('2.488rem'),
					2: f('2.074rem'),
					3: f('1.728rem'),
					4: f('1.44rem'),
					5: f('1.2rem'),
					6: f('1rem')
				},
				medium: {
					1: f('3.052rem'),
					2: f('2.441rem'),
					3: f('1.953rem'),
					4: f('1.563rem'),
					5: f('1.25rem'),
					6: f('1rem')
				},
				large: {
					1: f('4.209rem'),
					2: f('3.157rem'),
					3: f('2.369rem'),
					4: f('1.777rem'),
					5: f('1.333rem'),
					6: f('1rem')
				}
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

const elevation = {
	...[
		f('none'),
		f('0 1px 2px 0 rgb(0 0 0 / 0.05)'),
		f('0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'),
		f('0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'),
		f('0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'),
		f(
			'0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
		),
		f('0 25px 50px -12px rgb(0 0 0 / 0.25)'),
		f('inset 0 2px 4px 0 rgb(0 0 0 / 0.05)')
	]
};

module.exports = {
	color,
	spacing,
	shape,
	type,
	elevation
};
