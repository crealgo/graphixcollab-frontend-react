// @ts-check

const f = require('./formatToken');
/**
 * @param {TokenLiteral[]} sizes
 *
 * @returns {{
 * 	small: TokenValue,
 * 	medium: TokenValue,
 * 	large: TokenValue
 * }}
 **/
module.exports = (...sizes) => {
	if (sizes.length === 3) {
		return {
			small: f(sizes[0]),
			medium: f(sizes[1]),
			large: f(sizes[2])
		};
	}

	return {
		small: f(sizes[0]),
		medium: f(sizes[0]),
		large: f(sizes[0])
	};
};
