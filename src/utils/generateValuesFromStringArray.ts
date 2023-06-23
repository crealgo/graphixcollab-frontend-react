import { paramCase } from 'change-case';
import { type OptionValue } from '../types/general';

export const generateValuesFromStringArray = (
	...items: string[]
): OptionValue[] => {
	return items.map(item => ({
		label: item,
		value: paramCase(item)
	}));
};
