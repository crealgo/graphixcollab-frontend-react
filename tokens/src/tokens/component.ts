/*
	namespace-object-base-modifier

	namespace: system-theme-domain
	object: group-component-element
	base: category-concept-property
	modifier: variant-state-scale-mode
*/

export const image = {
	borderRadius: '{shape.rounding.small}',
	backgroundColor: '{color.gray.300}'
};
export const testimonial = {
	container: {
		gap: '{spacing.4}',
		padding: '{spacing.6}',
		borderRadius: '{shape.rounding.medium}',
		border: '{spacing.px} solid {color.gray.300}',
		backgroundColor: '{color.white}',
		maxWidth: '34rem',
		shadow: '{elevation.3}'
	},
	content: {
		gap: '0.75rem'
	},
	quote: {
		maxRows: '3'
	},
	image: {
		width: '5.75rem',
		height: 'testimonials.image.width',
		borderRadius: '{shape.rounding.full}'
	}
	// rating: '',
};
