// @ts-check

const {colord} = require('colord');
const _f = require('./formatToken');

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
	light: _f(colord(baseHex).lighten(0.25).toHex()),
	main: _f(baseHex),
	dark: _f(colord(baseHex).darken(0.25).toHex()),
	contrast: _f(colord(baseHex).isDark() ? '#ffffff' : '#000000'),
});
