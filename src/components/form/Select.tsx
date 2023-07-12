import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { forwardRef, type ComponentPropsWithRef, type FC } from 'react';
import { generateBaseInputStyles } from './generateBaseInputStyles';
import clsx from 'clsx';
import { type OptionBag } from './types';

export type SelectProps = {
	options?: OptionBag[];
} & BaseControlProps &
	ComponentPropsWithRef<'select'>;

const SelectWrapper = styled('div')<SelectProps>(
	({ inputSize }) => css`
		display: inline-block;
		position: relative;

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

		padding-inline: var(--select-spacing-padding-inline-${props.inputSize});
		appearance: none;
		cursor: pointer;

		width: 100%;
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
