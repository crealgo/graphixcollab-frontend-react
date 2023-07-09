import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { forwardRef, type ComponentPropsWithRef, type FC } from 'react';
import { generateBaseInputStyles, type BaseInputProps } from './Input';
import clsx from 'clsx';

export type SelectProps = {
	options?: OptionBag[];
} & BaseInputProps &
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

const StyledSelect = styled.select<SelectProps>(
	props => css`
		${generateBaseInputStyles(props)};

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
