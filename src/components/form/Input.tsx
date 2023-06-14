import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
	forwardRef,
	type ChangeEvent,
	type ComponentPropsWithRef
} from 'react';
import { type Size } from '../../types/general';

export type BaseInputProps = {
	variant?: 'standard' | 'branded';
	inputSize?: Size;
	required?: boolean;
};

export type InputProps = ComponentPropsWithRef<'input'> & BaseInputProps;

// FIXME: this is a temporary solution to the type issue, passing any props
export const generateBaseInputStyles = (props: any) => css`
	--input-status-color-main: blue;
	--input-background-color: var(--color-white);
	--input-opacity: 1;

	// if has value and is invalid
	&.touched {
		&:invalid,
		&:out-of-range {
			--input-status-color-main: var(--color-feedback-error-main);
			--input-status-color-light: var(--color-feedback-error-light);
			--input-border-color: var(--color-feedback-error-main);
			--input-background-color: var(--color-feedback-error-light);

			// temporary
			+ .input-helper-text {
				color: var(--color-feedback-error-main);
			}
		}

		&:valid,
		&:in-range {
			--input-status-color-main: var(--color-feedback-success-light);
			--input-border-color: var(--color-feedback-success-main);
			--input-background-color: var(--color-feedback-success-lightest);

			// temporary
			+ .input-helper-text {
				color: var(--color-feedback-success-main);
			}
		}
	}

	&:disabled {
		--input-opacity: 0.5;

		~ .input-helper-text {
			opacity: 0.5;
		}
	}

	border: unset;
	padding: unset;
	outline: unset;

	height: var(--input-height-${props.inputSize});
	padding-inline: var(--input-spacing-padding-inline-${props.inputSize});
	font-size: var(--input-font-size-${props.inputSize});

	background-color: var(--input-background-color);

	color: var(--input-text-color);
	box-shadow: var(--input-shadow);
	border-radius: var(--input-bezel-${props.inputSize});
	opacity: var(--input-opacity);

	border-style: var(--input-border-style);
	border-width: var(--input-border-width);
	border-color: var(--input-border-color);
`;

export const BaseInputElement = styled.input<InputProps>(
	generateBaseInputStyles
);

const inputTouched = new Event('touched', { bubbles: true });

declare module 'react' {}

const addTouchedState = (el: HTMLInputElement): void => {
	if (el.value && !el.classList.contains('touched')) {
		el.dispatchEvent(inputTouched);
		el.classList.add('touched');
		return;
	}

	if (!el.value && el.classList.contains('touched')) {
		el.classList.remove('touched');
	}
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ onChange, ...props }, ref) => {
		const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
			addTouchedState(event.target);
			onChange?.(event);
		};

		return (
			<BaseInputElement {...props} ref={ref} onChange={handleOnChange} />
		);
	}
);

Input.displayName = 'Input';
