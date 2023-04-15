const colors = require("tailwindcss/colors");
const generateColorVariants = require("./utils/generateColorVariants");
const generateSizeValues = require("./utils/generateSizeValues");
const formatTokenValue = require("./utils/formatTokenValue");

/*
namespace-object-base-modifier

namespace: system-theme-domain

object: group-component-element
base: category-concept-property
modifier: variant-state-scale-mode
*/

module.exports = {
	color: {
		brand: {
			primary: generateColorVariants(colors.rose[700]),
			secondary: generateColorVariants(colors.yellow[300]),
		},
		feedback: {
			success: generateColorVariants(colors.green[600]),
			error: generateColorVariants(colors.red[600]),
			warning: generateColorVariants(colors.amber[600]),
			info: generateColorVariants(colors.blue[600]),
		},
		gray: Object.entries(colors.slate).reduce((aggregate, [colorScale, colorValue]) => {
			aggregate[colorScale] = { value: colorValue };
			return aggregate;
		}, {}),
		text: {
			primary: colors.slate[900],
			secondary: colors.slate[400],
		},
	},
	shadow: {},
	semantic: {
		input: {
			border: {
				style: formatTokenValue("solid"),
				width: formatTokenValue(0.0625),
				color: formatTokenValue("{color.gray.900}"),
			},
			padding: {
				x: generateSizeValues(0.5, 0.75, 0.875),
				y: generateSizeValues(0.25, 0.5, 0.625),
			},
			height: generateSizeValues(1.75, 2, 2.25),
			bezel: generateSizeValues(0.25, 0.25, 0.375),
		},
		action: {},
	},
};
