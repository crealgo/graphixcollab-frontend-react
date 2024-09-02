declare type BaseControlProps = {
	variant?: 'standard' | 'branded';
	inputSize?: Size;
	required?: boolean;

	// validation
	isInvalid?: boolean;
	isValid?: boolean;
	isTouched?: boolean;
};

declare type ApiErrorBag = Record<string, string[]>;
