// @ts-check

const f = require('../utils/formatToken');

module.exports = {
	testimonial: {
		container: {
			gap: f('{size.4}'),
			padding: f('{size.6}'),
			borderRadius: f('{shape.rounding.medium}'),
			border: f('{size.px} solid {color.gray.300}'),
		},
		content: {
			gap: f('0.75rem'),
		},
		// quote: '',
		image: {
			size: f('5.75rem'),
			borderRadius: f('{shape.rounding.full}'),
		},
		// rating: '',
	},
};
