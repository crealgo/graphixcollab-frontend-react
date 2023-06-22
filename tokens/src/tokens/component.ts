// @ts-check

import f from '../utils/format-token';

/*
	namespace-object-base-modifier

	namespace: system-theme-domain
	object: group-component-element
	base: category-concept-property
	modifier: variant-state-scale-mode
*/

export const image = {
	borderRadius: f('{shape.rounding.small}'),
	backgroundColor: f('{color.gray.300}')
};
export const testimonial = {
	container: {
		gap: f('{spacing.4}'),
		padding: f('{spacing.6}'),
		borderRadius: f('{shape.rounding.medium}'),
		border: f('{spacing.px} solid {color.gray.300}'),
		backgroundColor: f('{color.white}'),
		maxWidth: f('34rem'),
		shadow: f('{elevation.3}')
	},
	content: {
		gap: f('0.75rem')
	},
	quote: {
		maxRows: f('3')
	},
	image: {
		width: f('5.75rem'),
		height: f('testimonials.image.width'),
		borderRadius: f('{shape.rounding.full}')
	}
	// rating: '',
};
