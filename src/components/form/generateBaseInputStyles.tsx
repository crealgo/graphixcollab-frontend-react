export const generateBaseInputStyles = ({
	inputSize = 'medium'
}: BaseControlProps) => /* scss */ `
	--input-placeholder-color: var(--color-gray-300);
	--input-background-color: var(--color-white);
	--input-opacity: 1;

	min-width: 0rem;
	width: 100%;

	&:hover,
	&:focus-visible {
		--input-border-color: var(--color-gray-600);
	}

	&:active {
		--input-background-color: var(--color-gray-100);
	}

	// if has value and is invalid
	// &.is-touched {
		// &:invalid,
		&.is-invalid {
			--input-status-color-main: var(--color-feedback-error-main);
			--input-status-color-light: var(--color-feedback-error-light);
			--input-border-color: var(--color-feedback-error-main);
			--input-background-color: var(--color-feedback-error-light);
		}

		// &:valid,
		&.is-valid {
			--input-status-color-main: var(--color-feedback-success-light);
			--input-border-color: var(--color-feedback-success-main);
			--input-background-color: var(--color-feedback-success-lightest);
		}
	// }

	&:read-only:not(select):not([role='combobox']) {
		--input-border-color: transparent;
		--input-background-color: var(--color-gray-200);
		--input-placeholder-color: var(--color-gray-400);
		--input-shadow: none;
	}

	&:disabled {
		--input-opacity: 0.5;
		--input-border-color: transparent;
		--input-background-color: var(--color-gray-200);
		--input-placeholder-color: var(--color-gray-400);
		--input-shadow: none;
	}

	border: unset;
	padding: unset;
	/* outline: unset; */

	height: var(--input-height-${inputSize});
	padding-inline: var(--input-spacing-padding-inline-${inputSize});
	font-size: var(--input-font-size-${inputSize});

	background-color: var(--input-background-color);

	color: var(--input-text-color);
	box-shadow: var(--input-shadow);
	border-radius: var(--input-bezel-${inputSize});
	opacity: var(--input-opacity);

	border-style: var(--input-border-style);
	border-width: var(--input-border-width);
	border-color: var(--input-border-color);

	&::placeholder {
		color: var(--input-placeholder-color);
	}

	// TODO: add auto-fill styling
	// :autofill {}
	// ::-webkit-autofill {}
`;
