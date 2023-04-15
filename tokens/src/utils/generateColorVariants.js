// @ts-check

const { colord } = require("colord");
const formatTokenValue = require("./formatTokenValue");

/**
 * @param {string} baseHex
 *
 * @returns {{
 * 	light: TokenValue,
 * 	main: TokenValue,
 * 	dark: TokenValue,
 * }}
 **/
module.exports = (baseHex) => ({
	light: formatTokenValue(colord(baseHex).lighten(0.25).toHex()),
	main: formatTokenValue(baseHex),
	dark: formatTokenValue(colord(baseHex).darken(0.25).toHex()),
});
