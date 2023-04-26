import {alpha} from '@mui/material/styles';
import colors from 'tailwindcss/colors';

export const colorIterator = (
	property = 'background',
	subSelectorString = '',
	opacity = 1
): string => {
	const colorOrder = [
		alpha(colors.red[500], opacity),
		alpha(colors.orange[500], opacity),
		alpha(colors.green[500], opacity),
		alpha(colors.blue[500], opacity),
		alpha(colors.purple[500], opacity)
	];

	return colorOrder.reduce(
		(previous, current, index) => `
		${previous}
		&:nth-of-type(${index + 1}n) ${subSelectorString} {
			${property}: ${current};
		}
	`,
		''
	);
};
