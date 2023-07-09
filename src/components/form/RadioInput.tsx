import styled from '@emotion/styled';
import { forwardRef, type ComponentPropsWithRef } from 'react';
import { type BaseInputProps } from './Input';

export type RadioProps = {
	label?: string;
	meta?: string;
	options?: OptionBag[];
} & BaseInputProps &
	ComponentPropsWithRef<'input'>;

const RadioLabel = styled.label`
	display: grid;
	grid-template-columns: 1rem 1fr;
	gap: var(--spacing-1-5);
	place-items: start;
	place-content: start;

	font-size: var(--input-font-size-medium);
	font-weight: 400;

	cursor: pointer;

	.RadioInput-text {
		display: grid;
		grid-template-columns: 1fr;
	}

	.RadioInput-meta {
		color: var(--color-gray-500);
	}
`;

const Radio = styled.input`
	opacity: 0;
	visibility: hidden;
	position: absolute;

	+ .RadioInput-indicator {
		content: '';
		background-clip: padding-box;
		display: inline-flex;
		height: var(--input-font-size-medium);
		width: var(--input-font-size-medium);
		border-radius: 50%;
		border: var(--input-border-composite);
		background-color: var(--color-white);
	}

	&:hover + .RadioInput-indicator,
	&:focus-visible + .RadioInput-indicator {
		border-color: var(--color-gray-600);
		background-color: var(--color-gray-100);
	}

	&:focus-visible + .RadioInput-indicator {
		outline: solid 2px var(--color-gray-600);
		outline-offset: 2px;
	}

	&:checked + .RadioInput-indicator {
		border-color: var(--color-gray-600);
		background-color: var(--color-brand-primary-main);
		background-image: radial-gradient(
			transparent 0%,
			transparent 50%,
			#fff 52%
		);
	}
`;

export const RadioInput = forwardRef<HTMLInputElement, RadioProps>(
	(props, ref) => (
		<RadioLabel htmlFor={props.id}>
			<Radio ref={ref} type="radio" {...props} />
			<span className="RadioInput-indicator" />
			<span className="RadioInput-text">
				<span>{props.label}</span>
				<small className="RadioInput-meta">{props.meta}</small>
			</span>
		</RadioLabel>
	)
);
