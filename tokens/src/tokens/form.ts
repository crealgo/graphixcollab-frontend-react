import { generateSizeValues } from '../utils/generators';

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
			'0.875rem calc(2*{input.spacing.gap.large} + {inputGroupAction.size.large})'
		)
	}
};

const input = {
	display: 'inline-flex',
	alignItems: 'center',
	fontSize: generateSizeValues('0.875rem', '1rem', '1.125rem'),
	textColor: '{color.text.primary}',
	border: {
		style: 'solid',
		width: '0.0625rem',
		color: '{color.gray.600}',
		composite:
			'{input.border.style} {input.border.width} {input.border.color}'
	},
	spacing: {
		paddingInline: generateSizeValues('0.5rem', '0.75rem', '0.875rem'),
		gap: generateSizeValues('0.375rem', '0.375rem', '0.5625rem')
	},
	height: generateSizeValues('1.75rem', '2rem', '2.25rem'),
	bezel: generateSizeValues('0.25rem', '0.25rem', '0.375rem'),
	shadow: '{elevation.1}'
};

const inputGroupAction = {
	size: generateSizeValues('1.125rem', '1.25rem', '1.375rem')
};

const button = {
	display: '{input.display}',
	alignItems: '{input.alignItems}',
	font: {
		weight: 700,
		size: generateSizeValues(
			'{input.fontSize.small}',
			'{input.fontSize.medium}',
			'{input.fontSize.large}'
		)
	},
	letterSpacing: '-0.01em',
	textColor: {
		primary: '{color.brand.primary.contrast}',
		secondary: '{color.brand.secondary.contrast}',
		tertiary: '{color.text.primary}',
		text: '{color.text.primary}'
	},
	border: {
		primary: '{input.border.composite}',
		secondary: '{input.border.composite}',
		tertiary: '{input.border.composite}',
		text: 'none'
	},
	backgroundColor: {
		primary: '{color.brand.primary.main}',
		secondary: '{color.brand.secondary.main}',
		tertiary: '{color.white}',
		text: 'transparent'
	},
	shadow: {
		primary: '{elevation.2}',
		secondary: '{elevation.2}',
		tertiary: '{elevation.0}',
		text: '{elevation.0}'
	},
	text: {
		decoration: {
			primary: 'unset',
			secondary: 'unset',
			tertiary: 'unset',
			text: 'underline'
		},
		thickness: {
			primary: 'unset',
			secondary: 'unset',
			tertiary: 'unset',
			text: '2px'
		},
		offset: {
			primary: 'unset',
			secondary: 'unset',
			tertiary: 'unset',
			text: '2px'
		}
	},
	spacing: input.spacing,
	bezel: input.bezel
};

export default {
	input,
	inputGroupAction,
	select,
	button
};
