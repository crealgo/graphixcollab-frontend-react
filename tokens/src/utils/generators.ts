import {type RawToken} from '../types';

type ColorScale = Record<string, string>;
type ColorScaleTokens = Record<string, RawToken>;

export const generateScaleFromObject = (
	colorScale: ColorScale,
): ColorScaleTokens =>
	Object.entries(colorScale).reduce(
		(aggregate, [colorScale, colorValue]) => ({
			...aggregate,
			[colorScale]: colorValue,
		}),
		{},
	);

export const generateSizeValues = (...sizes: RawToken[]) => {
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
