// @ts-check

const colors = require('tailwindcss/colors');
const generateColorVariants = require('../utils/generateColorVariants');
const _f = require('../utils/formatToken');

/*
Namespace-object-base-modifier

namespace: system-theme-domain

object: group-component-element
base: category-concept-property
modifier: variant-state-scale-mode
*/

const grayScale = Object.entries(colors.slate).reduce((aggregate, [colorScale, colorValue]) => ({
	...aggregate,
	[colorScale]: {value: colorValue},
}), {});

module.exports = {
	color: {
		white: _f(colors.white),
		black: _f(colors.black),
		brand: {
			primary: generateColorVariants(colors.rose[700]),
			secondary: generateColorVariants(colors.yellow[300]),
			text: generateColorVariants('{color.white}'),
		},
		feedback: {
			success: generateColorVariants(colors.green[600]),
			error: generateColorVariants(colors.red[600]),
			warning: generateColorVariants(colors.amber[600]),
			info: generateColorVariants(colors.blue[600]),
		},
		gray: grayScale,
		text: {
			primary: _f(colors.slate[900]),
			secondary: _f(colors.slate[400]),
		},
	},
	elevation: {...[
		_f('none'),
		_f('0 1px 2px 0 rgb(0 0 0 / 0.05)'),
		_f('0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'),
		_f('0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'),
		_f('0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'),
		_f('0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'),
		_f('0 25px 50px -12px rgb(0 0 0 / 0.25)'),
		_f('inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'),
	]},
};
