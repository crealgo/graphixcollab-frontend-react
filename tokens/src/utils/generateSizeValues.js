/**
 * @param {TokenLiteral} small
 * @param {TokenLiteral} medium
 * @param {TokenLiteral} large
 *
 * @returns {{
 * 	small: TokenLiteral,
 * 	medium: TokenLiteral,
 * 	large: TokenLiteral
 * }}
 **/
module.exports = (...sizes) => {
	if (sizes.length === 3) {
		return {
			small: sizes[0],
			medium: sizes[1],
			large: sizes[2],
		};
	}

	return {
		small: sizes[0],
		medium: sizes[0],
		large: sizes[0],
	};
};
