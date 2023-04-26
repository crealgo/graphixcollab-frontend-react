// @ts-check

const colors = require('tailwindcss/colors');
const generateColorVariants = require('../utils/generateColorVariants');

module.exports = {
	color: {
		sequence: {
			...[
				generateColorVariants(colors.red[500]),
				generateColorVariants(colors.orange[500]),
				generateColorVariants(colors.green[500]),
				generateColorVariants(colors.blue[500]),
				generateColorVariants(colors.purple[500])
			]
		}
	}
};
