import styled from '@emotion/styled';
import { forwardRef, type ComponentPropsWithRef, type ReactNode } from 'react';
import UncheckedIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckedIcon from '@mui/icons-material/CheckBox';
import { type OptionBag } from './types';

export type CheckboxInputProps = OptionBag &
	BaseControlProps &
	ComponentPropsWithRef<'input'>;

const inputSize = '1.25rem';

const CheckboxLabel = styled.label`
	display: grid;
	grid-template-columns: ${inputSize} 1fr;
	gap: var(--spacing-1-5);
	place-items: start;
	place-content: start;

	font-size: var(--input-font-size-medium);
	font-weight: 400;

	cursor: pointer;

	.CheckboxInput-text {
		display: grid;
		line-height: ${inputSize};
		grid-template-columns: 1fr;

		.CheckboxInput-meta {
			line-height: normal;
			color: var(--color-gray-500);
		}
	}
`;

const Checkbox = styled('input', {
	shouldForwardProp: prop =>
		!['inputSize', 'isTouched', 'isInvalid', 'isValid', 'label'].includes(
			prop
		)
})/* scss */ `
	opacity: 0;
	position: absolute;
	cursor: pointer;

	+ .CheckboxInput-indicator {
		display: flex;
		border-radius: 50%;
		overflow: hidden;
		width: ${inputSize};
		height: ${inputSize};

		.CheckboxInput-icon {
			width: inherit;
			height: inherit;
			color: var(--color-gray-500);
			display: none;
		}
	}

	&:not(:checked)
		+ .CheckboxInput-indicator
		.CheckboxInput-icon.is-unchecked {
		display: flex;
	}

	&:hover,
	&:focus-visible {
		+ .CheckboxInput-indicator .CheckboxInput-icon {
			color: var(--color-gray-800);
			background-color: var(--color-gray-100);
		}
	}

	&:checked + .CheckboxInput-indicator .CheckboxInput-icon.is-checked {
		color: var(--color-brand-magenta-main);
		display: flex;
	}
`;

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
	(props, ref) => (
		<CheckboxLabel htmlFor={props.id}>
			<Checkbox ref={ref} type="checkbox" {...props} value="yes" />
			<div className="CheckboxInput-indicator">
				<CheckedIcon className="CheckboxInput-icon is-checked" />
				<UncheckedIcon className="CheckboxInput-icon is-unchecked" />
			</div>
			<span className="CheckboxInput-text">
				<span>{props.label}</span>
				<small className="CheckboxInput-meta">{props.meta}</small>
			</span>
		</CheckboxLabel>
	)
);
