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
export const generateBaseInputStyles = ({
	inputSize = 'medium'
}: InputProps) => /* scss */ `
	--input-placeholder-color: var(--color-gray-300);
	--input-background-color: var(--color-white);
	--input-opacity: 1;

	min-width: 0rem;

	&:hover,
	&:focus-visible {
		--input-border-color: var(--color-gray-600);
	}

	&:active {
		--input-background-color: var(--color-gray-100);
	}

	// if has value and is invalid
	&.touched {
		&.error {
			--input-status-color-main: var(--color-feedback-error-main);
			--input-status-color-light: var(--color-feedback-error-light);
			--input-border-color: var(--color-feedback-error-main);
			--input-background-color: var(--color-feedback-error-light);
		}

		&.success {
			--input-status-color-main: var(--color-feedback-success-light);
			--input-border-color: var(--color-feedback-success-main);
			--input-background-color: var(--color-feedback-success-lightest);
		}
	}

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
`;

export const BaseInputElement = styled.input<InputProps>(
	props => css`
		${generateBaseInputStyles(props)};
	`
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
