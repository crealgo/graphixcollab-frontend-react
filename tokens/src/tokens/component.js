// @ts-check

const f = require('../utils/formatToken');

/*
	namespace-object-base-modifier

	namespace: system-theme-domain
	object: group-component-element
	base: category-concept-property
	modifier: variant-state-scale-mode
*/

module.exports = {
	image: {
		borderRadius: f('{shape.rounding.small}'),
		backgroundColor: f('{color.gray.300}'),
	},
	testimonial: {
		container: {
			gap: f('{size.4}'),
			padding: f('{size.6}'),
			borderRadius: f('{shape.rounding.medium}'),
			border: f('{size.px} solid {color.gray.300}'),
			backgroundColor: f('{color.white}'),
			maxWidth: f('34rem'),
			shadow: f('{elevation.3}'),
		},
		content: {
			gap: f('0.75rem'),
		},
		quote: {
			maxRows: f('3'),
		},
		image: {
			width: f('5.75rem'),
			height: f('testimonials.image.width'),
			borderRadius: f('{shape.rounding.full}'),
		},
		// rating: '',
	},
};
