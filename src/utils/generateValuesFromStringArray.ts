import { paramCase } from 'change-case';

export const generateValuesFromStringArray = (
	...items: string[]
): OptionBag[] => {
	return items.map(item => ({
		label: item,
		value: paramCase(item)
	}));
};
