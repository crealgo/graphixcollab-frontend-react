import { type FC, type PropsWithChildren, useId } from 'react';
import { type Size } from '../../types/general';
import { Input, type InputProps } from './Input';
import { type OptionValue } from '../../types/OptionValue';
import { type BaseInputProps } from '../../types/base';

export type AutocompleteProps = {
	inputSize?: Size;
	options?: OptionValue[];
} & BaseInputProps &
	PropsWithChildren;

// TODO: add dropdown icon 'button'
export const Autocomplete: FC<AutocompleteProps> = ({
	children,
	options,
	...props
}) => {
	const generatedId = useId();
	const listId = `list-${generatedId}`;

	return (
		<>
			<Input list={listId} {...props} />
			<datalist id={listId}>
				{children ??
					options?.map(({ label, value }, optionIndex) => (
						<option key={optionIndex} value={label}>
							{value}
						</option>
					))}
			</datalist>
		</>
	);
};
