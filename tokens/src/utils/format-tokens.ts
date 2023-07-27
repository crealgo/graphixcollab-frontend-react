import {type FormattedTokenObject, type RawTokenObject} from '../types';

export const generateColorVariants = (
	baseHex: string,
): FormattedTokenObject => ({
	main: {value: baseHex},
	lightest: {value: baseHex},
	lighter: {value: baseHex},
	light: {value: baseHex},
	neutral: {value: baseHex},
	dark: {value: baseHex},
	darker: {value: baseHex},
	darkest: {value: baseHex},
	contrast: {value: baseHex},
});

const variantCheck = ' !!has-variants';

export const formatTokens = (tokens: RawTokenObject): FormattedTokenObject => {
	const formattedTokens: FormattedTokenObject = {};

	for (const [key, value] of Object.entries(tokens)) {
		if (typeof value === 'object') {
			formattedTokens[key] = formatTokens(value);
			continue;
		}

		if (typeof value === 'string' && value.includes(variantCheck)) {
			const tokenValue = value.replace(variantCheck, '');
			formattedTokens[key] = generateColorVariants(tokenValue);
			continue;
		}

		formattedTokens[key] = {value};
	}

	return formattedTokens;
};
