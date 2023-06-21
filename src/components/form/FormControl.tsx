import styled from '@emotion/styled';
import clsx from 'clsx';
import { useEffect, useRef, type FC } from 'react';
import { InputHelperText } from './InputHelperText';
import { handleFormControlTouch } from './utils/handleFormControlTouch';
import { type BaseComponentProps } from '../../types/base';

export type FormControlProps = {
	label?: string;
	labelFor?: string;
	// labelInfo?: string; // SEE blueprint js
	helperText?: string;
	helperTextId?: string;
	isFullWidth?: boolean;
} & Pick<BaseComponentProps, 'className' | 'children'>;

const StyledLabel = styled.label`
	display: inline-grid;
	grid-template-columns: 1fr;

	color: var(--color-text-primary);
	font-size: 14px;
	line-height: 1rem;
	font-weight: 500;
	letter-spacing: -0.1px;

	.Select-root,
	.Input-root {
		margin-top: 0.25rem;
	}

	.FormControl-helper-text {
		margin-top: 0.25rem;
	}

	&.full-width {
		width: 100%;
	}

	&.required {
		.input-label::after {
			content: '*';
			color: var(--color-feedback-error-main);
		}
	}
`;

export const FormControl: FC<FormControlProps> = props => {
	const wrapperRef = useRef<HTMLLabelElement>(null);

	useEffect(() => {
		if (wrapperRef.current) {
			const el = wrapperRef.current;

			// @ts-expect-error syntetic-event vs event
			el.addEventListener('touched', handleFormControlTouch);

			return () => {
				// @ts-expect-error syntetic-event vs event
				el.removeEventListener('touched', handleFormControlTouch);
			};
		}
	}, [wrapperRef]);

	return (
		<StyledLabel
			ref={wrapperRef}
			htmlFor={props.labelFor}
			className={clsx(props.className, 'FormControl-root', {
				'full-width': props.isFullWidth
			})}
		>
			<span className="FormControl-label-text">{props.label}</span>
			{props.children}
			{props.helperText && (
				<InputHelperText
					id={props.helperTextId}
					className="FormControl-helper-text"
				>
					{props.helperText}
				</InputHelperText>
			)}
		</StyledLabel>
	);
};
