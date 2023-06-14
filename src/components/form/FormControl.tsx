import styled from '@emotion/styled';
import clsx from 'clsx';
import {
	Children,
	cloneElement,
	isValidElement,
	useId,
	type ComponentPropsWithRef,
	type FC,
	type ReactElement,
	useEffect,
	useRef,
	type SyntheticEvent
} from 'react';
import { type BaseComponentProps } from '../../types/base';
import { type Size } from '../../types/general';
import { type AutocompleteProps } from './Autocomplete';
import { type BaseInputProps, type InputProps } from './Input';
import { InputHelperText } from './InputHelperText';
import { InputLabel } from './InputLabel';
import { type SelectProps } from './Select';

export type FormControlProps = {
	label?: string;
	helperText?: string;
	controlSize?: Size;
	InputProps?: InputProps | SelectProps | AutocompleteProps;
	LabelProps?: ComponentPropsWithRef<'label'>;
	HelperTextProps?: ComponentPropsWithRef<'span'>;
} & BaseComponentProps &
	BaseInputProps;

export const Wrapper = styled.div`
	display: inline-grid;
	min-width: 10rem;

	.input {
		margin-top: 0.25rem;
	}

	.input-helper-text {
		margin-top: 0.125rem;
	}
`;

const touchedEventHandler = (event: SyntheticEvent<HTMLElement>) => {
	if (event.type === 'touched') {
		event.stopPropagation();

		[
			event.currentTarget,
			...event.currentTarget.querySelectorAll(
				'.input-label, .input-helper-text'
			)
		].forEach(el => {
			el.classList.add('touched');
		});
	}
};

export const FormControl: FC<FormControlProps> = ({
	LabelProps,
	HelperTextProps,
	...props
}) => {
	const generatedId = useId();
	const resolvedId = props.id ?? generatedId;
	const inputId = `${resolvedId}-input`;
	const helperTextId = `${resolvedId}-helper-text`;

	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!wrapperRef.current) {
			return;
		}

		const el = wrapperRef.current;

		// @ts-expect-error syntetic-event vs event
		el.addEventListener('touched', touchedEventHandler);

		return () => {
			// @ts-expect-error syntetic-event vs event
			el.removeEventListener('touched', touchedEventHandler);
		};
	}, [wrapperRef]);

	return (
		<Wrapper ref={wrapperRef} className={clsx(props.className, 'root')}>
			{props.label && (
				<InputLabel
					className="input-label"
					htmlFor={inputId}
					{...LabelProps}
				>
					{props.label}
				</InputLabel>
			)}
			{Children.map(props.children, child => {
				if (isValidElement(child)) {
					return cloneElement(child as ReactElement, {
						'id': inputId,
						'name': inputId,
						'className': clsx(
							child.props.className as string,
							'input'
						),
						'inputSize': props.controlSize ?? 'medium',
						'aria-describedby': helperTextId,
						...(child.props as {}),
						...props.InputProps
					});
				}

				return child;
			})}
			{props.helperText && (
				<InputHelperText
					id={helperTextId}
					className="input-helper-text"
					{...HelperTextProps}
				>
					{props.helperText}
				</InputHelperText>
			)}
		</Wrapper>
	);
};
