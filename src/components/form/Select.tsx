import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ArrowDownwardRounded } from '@mui/icons-material';
import { useRef, type ComponentPropsWithRef, type FC } from 'react';
import { type BaseInputProps } from '../../types/base';
import { type OptionValue } from '../../types/general';
import { getInputStyles } from '../../utils/getInputStyles';

export type SelectProps = {
	options?: OptionValue[];
} & BaseInputProps &
	ComponentPropsWithRef<'select'>;

const SelectWrapper = styled('div')<SelectProps>(
	({ inputSize }) => css`
		position: relative;

		& svg {
			pointer-events: none;
			position: absolute;
			top: 50%;
			height: var(--input-group-action-size-${inputSize});
			width: var(--input-group-action-size-${inputSize});
			right: var(--input-spacing-gap-${inputSize});
			transform: translateY(-50%);
			/* font-size: var(--input-group-action-size-${inputSize}); */
			opacity: 0.5;
		}
	`
);

const StyledInput = styled('select')<SelectProps>(
	({ inputSize }) => css`
		${getInputStyles({ inputSize })}

		padding-inline: var(--select-spacing-padding-inline-${inputSize});
		appearance: none;
		cursor: pointer;
	`
);

export const Select: FC<SelectProps> = ({
	options,
	inputSize = 'medium',
	...props
}) => {
	const selectRef = useRef<HTMLSelectElement>(null);

	const handleWrapperClick = () => {
		selectRef.current?.focus();
	};

	return (
		<SelectWrapper inputSize={inputSize} onClick={handleWrapperClick}>
			<StyledInput ref={selectRef} inputSize={inputSize} {...props}>
				{options?.map(({ label, value }, optionIndex) => (
					<option key={optionIndex} value={value}>
						{label}
					</option>
				))}
			</StyledInput>
			<ArrowDownwardRounded />
		</SelectWrapper>
	);
};
