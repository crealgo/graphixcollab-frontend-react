// @ts-check

const colors = require('tailwindcss/colors');
const generateSizeValues = require('../utils/generateSizeValues');
const _f = require('../utils/formatToken');
const {colord} = require('colord');

/*
	namespace-object-base-modifier

	namespace: system-theme-domain
	object: group-component-element
	base: category-concept-property
	modifier: variant-state-scale-mode
*/

module.exports = {
	input: {
		fontSize: generateSizeValues('0.875rem', '0.875rem', '1rem'),
		border: {
			style: _f('solid'),
			width: _f('0.0625rem'),
			color: _f(colord(colors.gray[900]).alpha(0.25).toHex()),
			composite: _f('{input.border.style} {input.border.width} {input.border.color}'),
		},
		padding: {
			x: generateSizeValues('0.5rem', '0.75rem', '0.875rem'),
			y: generateSizeValues('0.25rem', '0.5rem', '0.625rem'),
		},
		height: generateSizeValues('1.75rem', '2rem', '2.25rem'),
		bezel: generateSizeValues('0.25rem', '0.25rem', '0.375rem'),
	},
	action: {
		textColor: {
			primary: _f('{color.brand.primary.contrast}'),
			secondary: _f('{color.brand.secondary.contrast}'),
			tertiary: _f('{color.text.primary}'),
			text: _f('{color.text.primary}'),
		},
		border: {
			primary: _f('{input.border.composite}'),
			secondary: _f('{input.border.composite}'),
			tertiary: _f('{input.border.composite}'),
			text: _f('none'),
		},
		backgroundColor: {
			primary: _f('{color.brand.primary.main}'),
			secondary: _f('{color.brand.secondary.main}'),
			tertiary: _f('{color.white}'),
			text: _f('transparent'),
		},
		shadow: {
			primary: _f('{elevation.2}'),
			secondary: _f('{elevation.2}'),
			tertiary: _f('{elevation.0}'),
			text: _f('{elevation.0}'),
		},
		textDecoration: {
			primary: _f('none'),
			secondary: _f('none'),
			tertiary: _f('none'),
			text: _f('underline'),
		},
	},
};
