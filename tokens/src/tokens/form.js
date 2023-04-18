// @ts-check

const colors = require('tailwindcss/colors');
const generateSizeValues = require('../utils/generateSizeValues');
const f = require('../utils/formatToken');
const {colord} = require('colord');

/*
	namespace-object-base-modifier

	namespace: system-theme-domain
	object: group-component-element
	base: category-concept-property
	modifier: variant-state-scale-mode
*/

const select = {
	spacing: {
		paddingInline: generateSizeValues(
			'0.5rem calc(2*{input.spacing.gap.small} + {inputGroupAction.size.small})',
			'0.75rem calc(2*{input.spacing.gap.medium} + {inputGroupAction.size.medium})',
			'0.875rem calc(2*{input.spacing.gap.large} + {inputGroupAction.size.large})',
		),
	},
};

const input = {
	display: f('inline-flex'),
	alignItems: f('center'),
	fontSize: generateSizeValues('0.875rem', '0.875rem', '1rem'),
	border: {
		style: f('solid'),
		width: f('0.0625rem'),
		color: f(colord(colors.gray[900]).alpha(0.25).toHex()),
		composite: f('{input.border.style} {input.border.width} {input.border.color}'),
	},
	spacing: {
		paddingInline: generateSizeValues('0.5rem', '0.75rem', '0.875rem'),
		gap: generateSizeValues('0.375rem', '0.375rem', '0.5625rem'),
	},
	height: generateSizeValues('1.75rem', '2rem', '2.25rem'),
	bezel: generateSizeValues('0.25rem', '0.25rem', '0.375rem'),
	shadow: f('none'),
};

const inputGroupAction = {
	size: generateSizeValues('1.125rem', '1.25rem', '1.375rem'),
};

const button = {
	display: f('{input.display}'),
	alignItems: f('{input.alignItems}'),
	font: {
		weight: f(500),
		size: generateSizeValues(
			'{input.fontSize.small}',
			'{input.fontSize.medium}',
			'{input.fontSize.large}',
		),
	},
	letterSpacing: f('-0.01em'),
	textColor: {
		primary: f('{color.brand.primary.contrast}'),
		secondary: f('{color.brand.secondary.contrast}'),
		tertiary: f('{color.text.primary}'),
		text: f('{color.text.primary}'),
	},
	border: {
		primary: f('{input.border.composite}'),
		secondary: f('{input.border.composite}'),
		tertiary: f('{input.border.composite}'),
		text: f('none'),
	},
	backgroundColor: {
		primary: f('{color.brand.primary.main}'),
		secondary: f('{color.brand.secondary.main}'),
		tertiary: f('{color.white}'),
		text: f('transparent'),
	},
	shadow: {
		primary: f('{elevation.2}'),
		secondary: f('{elevation.2}'),
		tertiary: f('{elevation.0}'),
		text: f('{elevation.0}'),
	},
	text: {
		decoration: {
			primary: f('unset'),
			secondary: f('unset'),
			tertiary: f('unset'),
			text: f('underline'),
		},
		thickness: {
			primary: f('unset'),
			secondary: f('unset'),
			tertiary: f('unset'),
			text: f('2px'),
		},
		offset: {
			primary: f('unset'),
			secondary: f('unset'),
			tertiary: f('unset'),
			text: f('2px'),
		},
	},
	spacing: input.spacing,
	bezel: input.bezel,
};

module.exports = {
	input,
	inputGroupAction,
	select,
	button,
};
