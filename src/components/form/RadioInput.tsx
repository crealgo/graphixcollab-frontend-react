import styled from '@emotion/styled';
import {forwardRef, type ComponentPropsWithRef} from 'react';
import RadioUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import RadioChecked from '@mui/icons-material/RadioButtonChecked';
import {type OptionBag} from './types';

export type RadioInputProps = OptionBag &
BaseControlProps &
ComponentPropsWithRef<'input'>;

const inputSize = '1.25rem';

const RadioLabel = styled.label`
	display: grid;
	grid-template-columns: ${inputSize} 1fr;
	gap: var(--spacing-1-5);
	place-items: start;
	place-content: start;

	font-size: var(--input-font-size-medium);
	font-weight: 400;

	cursor: pointer;

	.RadioInput-text {
		display: grid;
		line-height: ${inputSize};
		grid-template-columns: 1fr;

		.RadioInput-meta {
			line-height: normal;
			color: var(--color-gray-500);
		}
	}
`;

const Radio = styled('input', {
	shouldForwardProp: prop =>
		!['inputSize', 'isTouched', 'isInvalid', 'isValid'].includes(prop),
})/* scss */`
	opacity: 0;
	position: absolute;
	cursor: pointer;

	+ .RadioInput-indicator {
		display: flex;
		border-radius: 50%;
		overflow: hidden;
		width: ${inputSize};
		height: ${inputSize};

		.RadioInput-icon {
			width: inherit;
			height: inherit;
			color: var(--color-gray-500);
			display: none;
		}
	}

	&:not(:checked) + .RadioInput-indicator .RadioInput-icon.is-unchecked {
		display: flex;
	}

	&:hover,
	&:focus-visible {
		+ .RadioInput-indicator .RadioInput-icon {
			color: var(--color-gray-800);
			background-color: var(--color-gray-100);
		}
	}

	&:checked + .RadioInput-indicator .RadioInput-icon.is-checked {
		color: var(--color-brand-magenta-main);
		display: flex;
	}
`;

export const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
	(props, ref) => (
		<RadioLabel htmlFor={props.id}>
			<Radio ref={ref} type='radio' {...props}/>
			<div className='RadioInput-indicator'>
				<RadioChecked className='RadioInput-icon is-checked'/>
				<RadioUnchecked className='RadioInput-icon is-unchecked'/>
			</div>
			<span className='RadioInput-text'>
				<span>{props.label}</span>
				<small className='RadioInput-meta'>{props.meta}</small>
			</span>
		</RadioLabel>
	),
);
