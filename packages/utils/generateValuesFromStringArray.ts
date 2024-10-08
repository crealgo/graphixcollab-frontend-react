import {paramCase} from 'change-case';
import {type OptionBag} from '@graphixcollab/components/types';

export const generateValuesFromStringArray = (
	...items: string[]
): OptionBag[] => items.map(item => ({
	label: item,
	value: paramCase(item),
}));
