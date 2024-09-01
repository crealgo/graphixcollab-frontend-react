import {paramCase} from 'change-case';
import {type OptionBag} from '../components/form/types';

export const generateValuesFromStringArray = (
	...items: string[]
): OptionBag[] => items.map(item => ({
	label: item,
	value: paramCase(item),
}));
