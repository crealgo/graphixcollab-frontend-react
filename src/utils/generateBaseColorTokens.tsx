import colors from "tailwindcss/colors";

export const generateBaseColorTokens = () => {
	let tokenString = "";

	for (const [color, colorValue] of Object.entries(colors)) {
		if (typeof colorValue === "string" && /^#/.test(colorValue)) {
			tokenString += `--color-base-${color}: ${colorValue};`;
		}

		// color scale
		if (typeof colorValue === "object") {
			for (const [scaleIndex, hexValue] of Object.entries(colorValue)) {
				tokenString += `--color-base-${color}-${scaleIndex}: ${hexValue};`;
			}
		}
	}

	return tokenString;
};
