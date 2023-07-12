import { useId, type FC, type PropsWithChildren } from 'react';
import { Input } from './Input';
import { type OptionBag } from './types';

export type AutocompleteProps = {
	options?: OptionBag[];
} & BaseControlProps &
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
						<option key={optionIndex} value={label as string}>
							{value}
						</option>
					))}
			</datalist>
		</>
	);
};
