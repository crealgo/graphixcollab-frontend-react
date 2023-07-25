import {TonalPalette, argbFromHex, hexFromArgb} from '@material/material-color-utilities';

const scale = {
	main: undefined,
	// lightest2x: 95,
	lightest: 92,
	lighter: 78,
	light: 65,
	neutral: 50,
	dark: 40,
	darker: 20,
	darkest: 10,
	// darkest2x: 5,
	contrast: 100,
};

type ColorShade = keyof typeof scale;

export const scaleColor = (baseHex: string, variant: ColorShade): string => {
	if (variant === 'main') {
		return baseHex;
	}

	const argb = argbFromHex(baseHex);
	const toner = TonalPalette.fromInt(argb);

	const toneAmount = scale[variant];
	const newArgb = toner.tone(toneAmount);
	const newHex = hexFromArgb(newArgb);

	return newHex;
};
