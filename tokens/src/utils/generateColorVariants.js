// @ts-check

const { colord } = require('colord');
const f = require('./formatToken');

/**
 * @param {string} baseHex
 *
 * @returns {{
 * 	lightest: TokenValue,
 * 	lighter: TokenValue,
 * 	light: TokenValue,
 * 	main: TokenValue,
 * 	dark: TokenValue,
 * 	darker: TokenValue,
 * 	darkest: TokenValue,
 *  contrast: TokenValue,
 * }}
 **/
module.exports = baseHex => ({
	lightest: f(colord(baseHex).lighten(0.5).alpha(0.2).toHex()),
	lighter: f(colord(baseHex).lighten(0.5).alpha(0.8).toHex()),
	light: f(colord(baseHex).lighten(0.45).toHex()),
	main: f(baseHex),
	dark: f(colord(baseHex).darken(0.125).desaturate(0.125).toHex()),
	darker: f(colord(baseHex).darken(0.25).desaturate(0.125).toHex()),
	darkest: f(colord(baseHex).darken(0.3).desaturate(0.125).toHex()),
	contrast: f(colord(baseHex).isDark() ? '#ffffff' : '#000000')
});
