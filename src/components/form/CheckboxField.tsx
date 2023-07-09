import { paramCase } from 'change-case';
import { forwardRef } from 'react';
import { FormControl, type FormControlProps } from './FormControl';
import { type SelectProps } from './Select';
import styled from '@emotion/styled';
import { InputGroup } from './InputGroup';

type Props = FormControlProps & SelectProps;

const CheckboxButton = styled('label')`
	--control-size: 1rem;

	display: flex;
	place-items: center;
	place-content: start;
	gap: var(--spacing-1-5);

	font-size: var(--input-font-size-medium);
	font-weight: 400;

	input[type='radio'],
	input[type='checkbox'] {
		height: var(--control-size);
		width: var(--control-size);
	}
`;

export const CheckboxField = forwardRef<HTMLInputElement, Props>(
	({ label, helperText, isFullWidth, options, ...props }, ref) => {
		const generatedName = paramCase(props.name ?? 'input-name');

		return (
			<FormControl
				isFullWidth
				isFieldset
				label={label}
				labelFor={generatedName}
				helperText={helperText}
				helperTextId={`${generatedName}-helper-text`}
				isRequired={props.required}
			>
				<InputGroup>
					{options?.map(option => (
						<CheckboxButton key={option.value}>
							<input
								key={generatedName}
								ref={ref}
								value={option.value}
								type="checkbox"
								id={generatedName}
								name={generatedName}
							/>
							{option.label}
						</CheckboxButton>
					))}
				</InputGroup>
			</FormControl>
		);
	}
);
