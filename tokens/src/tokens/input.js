const colors = require('tailwindcss/colors');
const generateSizeValues = require('../utils/generateSizeValues');
const formatTokens = require('../utils/formatTokens');
const {colord} = require('colord');

/*
	namespace-object-base-modifier

	namespace: system-theme-domain
	object: group-component-element
	base: category-concept-property
	modifier: variant-state-scale-mode
*/

module.exports = formatTokens({
	input: {
		font: {
			size: generateSizeValues('0.875rem'),
		},
		border: {
			style: 'solid',
			width: 0.0625,
			color: colord(colors.gray[900]).alpha(0.25).toHex(),
			composite: '{input.border.style} {input.border.width} {input.border.color}',
		},
		padding: {
			x: generateSizeValues('0.5rem', '0.75rem', '0.875rem'),
			y: generateSizeValues('0.25rem', '0.5rem', '0.625rem'),
		},
		height: generateSizeValues('1.75rem', '2rem', '2.25rem'),
		bezel: generateSizeValues('0.25rem', '0.25rem', '0.375rem'),
	},
	action: {
		primary: {
			textColor: '{color.brand.primary.contrast}',
			backgroundColor: '{color.brand.primary.main}',
			shadow: '{elevation.1}',
		},
		secondary: {
			textColor: '{color.brand.secondary.contrast}',
			backgroundColor: '{color.brand.secondary.main}',
			shadow: '{elevation.1}',
		},
		tertiary: {
			textColor: '{color.text.primary}',
			backgroundColor: '{color.white}',
			shadow: '{elevation.0}',
		},
		text: {
			textColor: '{color.text.primary}',
			backgroundColor: 'transparent',
			shadow: '{elevation.0}',
		},
	},
});
