import { FC, PropsWithChildren, useId } from "react";
import { Size } from "../../types/general";
import { Input, InputProps } from "./Input";

type OptionValue = {
	label: string;
	value: string;
};

export interface AutocompleteProps extends InputProps, PropsWithChildren {
	inputSize?: Size;
	options?: OptionValue[];
}

// TODO: add dropdown icon 'button'
export const Autocomplete: FC<AutocompleteProps> = ({ children, options, ...props }) => {
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
