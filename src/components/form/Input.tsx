import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
	forwardRef,
	type ChangeEvent,
	type ComponentPropsWithRef
} from 'react';
import { type Size } from '../../types/general';
import clsx from 'clsx';

export type BaseInputProps = {
	variant?: 'standard' | 'branded';
	inputSize?: Size;
	required?: boolean;
};

export type InputProps = ComponentPropsWithRef<'input'> & BaseInputProps;

// FIXME: this is a temporary solution to the type issue, passing any props
export const generateBaseInputStyles = (props: any) => css`
	/* --input-status-color-main: blue; */
	--input-placeholder-color: var(--color-gray-300);
	--input-background-color: var(--color-white);
	--input-opacity: 1;

	&:hover {
		--input-border-color: var(--color-gray-400);
	}

	// if has value and is invalid
	&.touched {
		&:invalid,
		&:out-of-range {
			--input-status-color-main: var(--color-feedback-error-main);
			--input-status-color-light: var(--color-feedback-error-light);
			--input-border-color: var(--color-feedback-error-main);
			--input-background-color: var(--color-feedback-error-light);
		}

		&:valid,
		&:in-range {
			--input-status-color-main: var(--color-feedback-success-light);
			--input-border-color: var(--color-feedback-success-main);
			--input-background-color: var(--color-feedback-success-lightest);
		}
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

	&::placeholder {
		color: var(--input-placeholder-color);
	}

	/* + .input-helper-text {
		color: var(--input-status-color-main);
		opacity: var(--input-opacity);
	} */
`;

export const BaseInputElement = styled.input<InputProps>(
	generateBaseInputStyles
);

const inputTouched = new Event('touched', { bubbles: true });

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
	({ onChange, className, inputSize = 'medium', ...props }, ref) => {
		const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
			addTouchedState(event.target);
			onChange?.(event);
		};

		return (
			<BaseInputElement
				{...props}
				ref={ref}
				inputSize={inputSize}
				className={clsx('Input-root', className)}
				onChange={handleOnChange}
			/>
		);
	}
);

Input.displayName = 'Input';
