import styled from '@emotion/styled';
import clsx from 'clsx';
import { useEffect, useRef, type FC, type ReactNode } from 'react';
import { InputHelperText } from './InputHelperText';
import { handleFormControlTouch } from './utils/handleFormControlTouch';

export type FormControlProps = {
	label?: ReactNode;
	labelFor?: string;
	// labelInfo?: string; // SEE blueprint js
	helperText?: ReactNode;
	helperTextId?: string;
	isRequired?: boolean;
	isFullWidth?: boolean;
	/**
	 * This prop is primarily used for when the FormControl wraps a group of
	 * radio buttons or checkboxes.
	 *
	 * @default false
	 */
	isFieldset?: boolean;
} & Pick<BaseComponentProps, 'className' | 'children'>;

const StyledLabel = styled.label`
	display: inline-grid;
	grid-template-columns: 1fr;
	border: unset;
	padding: unset;

	color: var(--color-text-primary);
	font-size: 14px;
	line-height: 1rem;
	font-weight: 500;
	letter-spacing: -0.1px;

	.FormControl-label {
		margin-bottom: 0.25rem;
		width: 100%;
		display: block;
	}

	.FormControl-helper-text {
		margin-top: 0.25rem;
	}

	&.is-full-width {
		width: 100%;
	}

	&.is-fieldset .FormControl-label {
		padding-bottom: 0.25rem;
		margin-bottom: 0.5rem;
		border-bottom: 1px solid var(--color-gray-400);
	}

	&.is-required .FormControl-label::after {
		content: '*';
		color: var(--color-feedback-error-main);
	}
`;

export const FormControl: FC<FormControlProps> = props => {
	const wrapperRef = useRef<HTMLLabelElement>(null);

	useEffect(() => {
		if (wrapperRef.current) {
			const el = wrapperRef.current;

			// @ts-expect-error synthetic-event vs event
			el.addEventListener('touched', handleFormControlTouch);

			return () => {
				// @ts-expect-error synthetic-event vs event
				el.removeEventListener('touched', handleFormControlTouch);
			};
		}
	}, [wrapperRef]);

	let WrapperComponent: 'label' | 'fieldset' = 'label';
	let LabelComponent: 'span' | 'legend' = 'span';

	if (props.isFieldset) {
		WrapperComponent = 'fieldset';
		LabelComponent = 'legend';
	}

	return (
		<StyledLabel
			ref={wrapperRef}
			as={WrapperComponent}
			htmlFor={props.labelFor}
			className={clsx(props.className, 'FormControl-root', {
				'is-full-width': props.isFullWidth,
				'is-fieldset': props.isFieldset,
				'is-required': props.isRequired
			})}
		>
			<LabelComponent className="FormControl-label">
				{props.label}
			</LabelComponent>
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
