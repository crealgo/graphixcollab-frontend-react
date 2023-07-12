import { css } from '@emotion/react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { forwardRef, type ComponentPropsWithRef } from 'react';
import { generateBaseInputStyles } from './generateBaseInputStyles';

export type TextAreaProps = ComponentPropsWithRef<'textarea'> &
	BaseControlProps;

export const BaseElement = styled('textarea', {
	shouldForwardProp: prop =>
		!['inputSize', 'isTouched', 'isInvalid', 'isValid'].includes(prop)
})<TextAreaProps>(
	props => css`
		${generateBaseInputStyles(props)};
		height: auto;
	`
);

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ className, inputSize = 'medium', ...props }, ref) => (
		<BaseElement
			{...props}
			ref={ref}
			inputSize={inputSize}
			className={clsx(
				'Input-root',
				{
					'is-invalid': props.isInvalid,
					'is-valid': props.isValid,
					'is-touched': props.isTouched
				},
				className
			)}
		/>
	)
);

TextArea.displayName = 'Input';
