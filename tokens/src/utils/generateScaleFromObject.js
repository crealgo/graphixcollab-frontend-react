const f = require('./formatToken');

/**
 * @param {Record<string, string>} colorScale
 * @returns
 */
const generateScaleFromObject = colorScale =>
	Object.entries(colorScale).reduce(
		(aggregate, [colorScale, colorValue]) => ({
			...aggregate,
			[colorScale]: f(colorValue)
		}),
		{}
	);

module.exports = generateScaleFromObject;
