/**
 * @param {TokenLiteral} tokenValue
 * @returns {TokenValue}
 */
const formatToken = tokenValue => ({value: tokenValue});

/**
 * @typedef {Record<string, TokenLiteral>} TokenObject;
 *
 * @param {Record<string, TokenLiteral | TokenObject} tokenObject
 * @returns
 */
const formatTokens = tokenObject => {
	for (const key in tokenObject) {
		if (typeof tokenObject[key] === 'string' || typeof tokenObject[key] === 'number') {
			tokenObject[key] = formatToken(tokenObject[key]);
		}

		if (typeof tokenObject[key] === 'object') {
			formatTokens(tokenObject[key]);
		}
	}

	return tokenObject;
};

module.exports = formatTokens;
