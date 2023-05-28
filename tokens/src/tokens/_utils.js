// @ts-check
const generateColorVariants = require('../utils/generateColorVariants');

module.exports = {
	color: {
		sequence: {
			...[
				generateColorVariants('{color.brand.cyan.main}'),
				generateColorVariants('{color.brand.magenta.main}'),
				generateColorVariants('{color.brand.yellow.main}'),
				generateColorVariants('{color.brand.key.main}')
			]
		}
	}
};
