import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {type ComponentPropsWithRef} from 'react';
import {type Size} from '../../types/general';

export type InputProps = {
	inputSize?: Size;
} & ComponentPropsWithRef<'input'>;

export const Input = styled.input<InputProps>(
	({inputSize = 'medium'}) => css`
		border: unset;
		padding: unset;
		outline: unset;
		font-size: 1rem;

		height: var(--input-height-${inputSize});
		padding-inline: var(--input-padding-x-${inputSize});

		color: var(--input-color-text-primary);
		box-shadow: var(--input-shadow-elevation-0);
		border: var(--input-border);
		border-radius: var(--input-bezel-${inputSize});

		/* &:valid {
			box-shadow: var(),  var(--shadow-elevation-0);
		}

		&:invalid {
			box-shadow:
		} */
	`,
);
