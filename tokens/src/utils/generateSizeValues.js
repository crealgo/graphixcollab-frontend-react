// @ts-check

const _f = require('./formatToken');
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
			small: _f(sizes[0]),
			medium: _f(sizes[1]),
			large: _f(sizes[2]),
		};
	}

	return {
		small: _f(sizes[0]),
		medium: _f(sizes[0]),
		large: _f(sizes[0]),
	};
};
