// @ts-check

const {colord} = require('colord');

/**
 * @param {string} baseHex
 *
 * @returns {{
 * 	light: TokenLiteral,
 * 	main: TokenLiteral,
 * 	dark: TokenLiteral,
 *  contrast: TokenLiteral,
 * }}
 **/
module.exports = baseHex => ({
	light: colord(baseHex).lighten(0.25).toHex(),
	main: baseHex,
	dark: colord(baseHex).darken(0.25).toHex(),
	contrast: colord(baseHex).isDark() ? '#ffffff' : '#000000',
});
