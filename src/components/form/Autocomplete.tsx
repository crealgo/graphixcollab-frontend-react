import { useId, type FC, type PropsWithChildren } from 'react';
import { type OptionValue } from '../../types/OptionValue';
import { Input, type BaseInputProps } from './Input';

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
