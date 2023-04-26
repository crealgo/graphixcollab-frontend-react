const f = require('./formatToken');

/*
Namespace-object-base-modifier

namespace: system-theme-domain

object: group-component-element
base: category-concept-property
modifier: variant-state-scale-mode
*/
/**
 * @param {Record<string, string>} colorScale
 * @returns
 */
const generateSequenceFromColorScale = colorScale =>
	Object.entries(colorScale).reduce(
		(aggregate, [colorScale, colorValue]) => ({
			...aggregate,
			[colorScale]: f(colorValue)
		}),
		{}
	);

module.exports = generateSequenceFromColorScale;
