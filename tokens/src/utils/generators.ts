import { type TokenLiteral, type TokenValue } from '../types';
import { colord, type AnyColor, type Colord } from 'colord';
import f from './format-token';

type ColorVariants = {
	lightest: TokenValue;
	lighter: TokenValue;
	light: TokenValue;
	main: TokenValue;
	dark: TokenValue;
	darker: TokenValue;
	darkest: TokenValue;
	contrast: TokenValue;
};

type HexCode = Exclude<TokenLiteral, number> | AnyColor | Colord;

export const generateColorVariants = (baseHex: HexCode): ColorVariants => ({
	lightest: f(colord(baseHex).lighten(0.5).alpha(0.2).toHex()),
	lighter: f(colord(baseHex).lighten(0.5).alpha(0.8).toHex()),
	light: f(colord(baseHex).lighten(0.45).toHex()),
	main: f(colord(baseHex).toHex()),
	dark: f(colord(baseHex).darken(0.125).desaturate(0.125).toHex()),
	darker: f(colord(baseHex).darken(0.25).desaturate(0.125).toHex()),
	darkest: f(colord(baseHex).darken(0.3).desaturate(0.125).toHex()),
	contrast: f(colord(baseHex).isDark() ? '#ffffff' : '#000000')
});

type ColorScale = Record<string, string>;
type ColorScaleTokens = Record<string, TokenValue>;

export const generateScaleFromObject = (
	colorScale: ColorScale
): ColorScaleTokens =>
	Object.entries(colorScale).reduce(
		(aggregate, [colorScale, colorValue]) => ({
			...aggregate,
			[colorScale]: f(colorValue)
		}),
		{}
	);

export const generateSizeValues = (...sizes: TokenLiteral[]) => {
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
