/**
 * @param {TokenLiteral} small
 * @param {TokenLiteral} medium
 * @param {TokenLiteral} large
 *
 * @returns {{
 * 	small: TokenValue,
 * 	medium: TokenValue,
 * 	large: TokenValue
 * }}
 **/
module.exports = (small, medium, large) => ({
	small: { value: small },
	medium: { value: medium },
	large: { value: large },
});
