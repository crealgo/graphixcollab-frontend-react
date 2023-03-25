import { defaultTheme as theme } from "@configs/themes";

export const colorIterator = (property = 'background', subSelectorString = ''): string => {
	const colors = [
		theme.palette.error.light,
		theme.palette.warning.light,
		theme.palette.info.light,
		theme.palette.success.light
	];

	return colors.reduce((previous, current, index) => `
		${previous}
		&:nth-of-type(${index + 1}n) ${subSelectorString} {
			${property}: ${current};
		}
	`, '')
}
