import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import clsx from 'clsx';
import { forwardRef, type ComponentPropsWithRef } from 'react';
import { generateBaseInputStyles } from './generateBaseInputStyles';
import { type OptionBag } from './types';

export type SelectProps = {
	options?: OptionBag[];
} & BaseControlProps &
	ComponentPropsWithRef<'select'>;

const SelectWrapper = styled('div')<SelectProps>(
	({ inputSize }) => css`
		display: inline-block;
		position: relative;
		width: 100%;

		& svg {
			pointer-events: none;
			position: absolute;
			top: 50%;
			height: var(--input-group-action-size-${inputSize});
			width: var(--input-group-action-size-${inputSize});
			right: var(--input-spacing-gap-${inputSize});
			transform: translateY(-50%);
			opacity: 0.5;
		}
	`
);

const StyledSelect = styled('select', {
	shouldForwardProp: prop =>
		!['inputSize', 'isTouched', 'isInvalid', 'isValid'].includes(prop)
})<SelectProps>(
	props => css`
		${generateBaseInputStyles({
			inputSize: props.inputSize
		})};
		width: 100%;
		display: block;

		padding-inline: var(--select-spacing-padding-inline-${props.inputSize});
		appearance: none;
		cursor: pointer;
	`
);

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ options, inputSize = 'medium', className, ...props }, ref) => (
		<SelectWrapper
			className={clsx('Select-root', className)}
			inputSize={inputSize}
		>
			<StyledSelect {...props} ref={ref} inputSize={inputSize}>
				{options?.map(({ label, value }, optionIndex) => (
					<option key={optionIndex} value={value}>
						{label}
					</option>
				))}
			</StyledSelect>
			<ArrowDownIcon />
		</SelectWrapper>
	)
);
