declare type OptionBag = {
	value: string;
	label: string;
	meta?: string;
};

declare type BaseControlProps = {
	variant?: 'standard' | 'branded';
	inputSize?: Size;
	required?: boolean;

	// validation
	isInvalid?: boolean;
	isValid?: boolean;
	isTouched?: boolean;
};
