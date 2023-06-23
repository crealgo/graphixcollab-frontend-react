import { colord } from 'colord';

const scale = {
	lightest: (baseHex: string) =>
		colord(baseHex).lighten(0.5).alpha(0.2).toHex(),
	lighter: (baseHex: string) =>
		colord(baseHex).lighten(0.5).alpha(0.8).toHex(),
	light: (baseHex: string) => colord(baseHex).lighten(0.45).toHex(),
	main: (baseHex: string) => colord(baseHex).toHex(),
	dark: (baseHex: string) =>
		colord(baseHex).darken(0.125).desaturate(0.125).toHex(),
	darker: (baseHex: string) =>
		colord(baseHex).darken(0.25).desaturate(0.125).toHex(),
	darkest: (baseHex: string) =>
		colord(baseHex).darken(0.3).desaturate(0.125).toHex(),
	contrast: (baseHex: string) =>
		colord(baseHex).isDark() ? '#ffffff' : '#000000'
};

export const scaleColor = (baseHex: string, variant: string): string => {
	if (Object.keys(scale).includes(variant)) {
		return scale[variant as keyof typeof scale](baseHex);
	}

	return baseHex;
};
