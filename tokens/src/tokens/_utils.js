// @ts-check

const colors = require('tailwindcss/colors');
const f = require('../utils/formatToken');

module.exports = {
	color: {
		sequence: {...[
			f(colors.red[500]),
			f(colors.orange[500]),
			f(colors.green[500]),
			f(colors.blue[500]),
			f(colors.purple[500]),
		]},
	},
};
