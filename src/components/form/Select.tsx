import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { type ComponentPropsWithRef, type FC } from 'react';
import { type OptionValue } from '../../types/general';
import { generateBaseInputStyles, type BaseInputProps } from './Input';
import clsx from 'clsx';

export type SelectProps = {
	options?: OptionValue[];
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

const StyledInput = styled.select<SelectProps>(
	props => css`
		${generateBaseInputStyles(props)};

		padding-inline: var(--select-spacing-padding-inline-${props.inputSize});
		appearance: none;
		cursor: pointer;

		width: 100%;
	`
);

export const Select: FC<SelectProps> = ({
	options,
	inputSize = 'medium',
	className,
	...props
}) => (
	<SelectWrapper
		className={clsx('Select-root', className)}
		inputSize={inputSize}
	>
		<StyledInput inputSize={inputSize} {...props}>
			{options?.map(({ label, value }, optionIndex) => (
				<option key={optionIndex} value={value}>
					{label}
				</option>
			))}
		</StyledInput>
		<ArrowDownIcon />
	</SelectWrapper>
);
