import {css} from '@emotion/react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import {forwardRef, type ComponentPropsWithRef} from 'react';
import {generateBaseInputStyles} from './generateBaseInputStyles';

export type InputProps = ComponentPropsWithRef<'input'> & BaseControlProps;

export const BaseInputElement = styled('input', {
	shouldForwardProp: prop =>
		!['inputSize', 'isTouched', 'isInvalid', 'isValid'].includes(prop),
})<InputProps>(
	props => css`
		${generateBaseInputStyles(props)};
	`,
);

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({className, inputSize = 'medium', ...props}, ref) => (
		<BaseInputElement
			{...props}
			ref={ref}
			inputSize={inputSize}
			className={clsx(
				'Input-root',
				{
					'is-invalid': props.isInvalid,
					'is-valid': props.isValid,
					'is-touched': props.isTouched,
				},
				className,
			)}
		/>
	),
);

Input.displayName = 'Input';
