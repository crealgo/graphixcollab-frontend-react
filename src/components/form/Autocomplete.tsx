import { type FC, type PropsWithChildren, useId } from 'react';
import { type BaseInputProps, Input, type InputProps } from './Input';
import { type OptionValue } from '../../types/OptionValue';

export type AutocompleteProps = {
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
