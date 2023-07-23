import {type FormattedTokenObject, type RawTokenObject} from '../types';

export const generateColorVariants = (
	baseHex: string,
): FormattedTokenObject => ({
	lightest: {value: baseHex},
	lighter: {value: baseHex},
	light: {value: baseHex},
	main: {value: baseHex},
	dark: {value: baseHex},
	darker: {value: baseHex},
	darkest: {value: baseHex},
	contrast: {value: baseHex},
});

// const variantCheck = /(?<hex>.*)(.\s)!!has-variants/g;
const variantCheck = ' !!has-variants';

export const formatTokens = (tokens: RawTokenObject): FormattedTokenObject => {
	const formattedTokens: FormattedTokenObject = {};

	for (const [key, value] of Object.entries(tokens)) {
		if (typeof value === 'object') {
			formattedTokens[key] = formatTokens(value);
			continue;
		}

		// case: #00aad2 !!has-variants
		if (typeof value === 'string' && value.includes(variantCheck)) {
			const tokenValue = value.replace(variantCheck, '');
			formattedTokens[key] = generateColorVariants(tokenValue);
			continue;
		}

		formattedTokens[key] = {value};
	}

	return formattedTokens;
};
