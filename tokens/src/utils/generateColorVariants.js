// @ts-check

const { colord } = require('colord');
const f = require('./formatToken');

/**
 * @param {string} baseHex
 *
 * @returns {{
 * 	light: TokenValue,
 * 	main: TokenValue,
 * 	dark: TokenValue,
 *  contrast: TokenValue,
 * }}
 **/
module.exports = baseHex => ({
	light: f(colord(baseHex).lighten(0.5).toHex()),
	main: f(baseHex),
	dark: f(colord(baseHex).darken(0.25).desaturate(0.125).toHex()),
	contrast: f(colord(baseHex).isDark() ? '#ffffff' : '#000000')
});
