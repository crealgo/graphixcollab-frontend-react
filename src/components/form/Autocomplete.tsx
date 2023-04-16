import {type FC, type PropsWithChildren, useId} from 'react';
import {type Size} from '../../types/general';
import {Input, type InputProps} from './Input';

type OptionValue = {
	label: string;
	value: string;
};

export type AutocompleteProps = {
	inputSize?: Size;
	options?: OptionValue[];
} & InputProps & PropsWithChildren;

// TODO: add dropdown icon 'button'
export const Autocomplete: FC<AutocompleteProps> = ({children, options, ...props}) => {
	const generatedId = useId();
	const listId = `list-${generatedId}`;

	return (
		<>
			<Input list={listId} {...props}/>
			<datalist id={listId}>
				{children
					?? options?.map(({label, value}, optionIndex) => (
						<option key={optionIndex} value={label}>
							{value}
						</option>
					))}
			</datalist>
		</>
	);
};
