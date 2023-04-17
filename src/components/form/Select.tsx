import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {ExpandCircleDown} from '@mui/icons-material';
import {type ComponentPropsWithRef, type FC} from 'react';
import {type BaseInputProps} from '../../types/base';
import {type OptionValue} from '../../types/general';
import {getInputStyles} from '../../utils/getInputStyles';

export type SelectProps = {
	options?: OptionValue[];
} & BaseInputProps & ComponentPropsWithRef<'select'>;

const SelectWrapper = styled('div')<SelectProps>(({
	inputSize = 'medium',
}) => css`
	position: relative;

	& svg {
		position: absolute;
		top: 50%;
		right: 0.25rem;
		transform: translateY(-50%);
		font-size: 1.125rem;
		opacity: 0.25;
	}
`);

const StyledInput = styled('select')<SelectProps>`
	${getInputStyles}
	appearance: none;

	padding-right: calc(1.125rem + 0.5rem);
`;

export const Select: FC<SelectProps> = ({options, inputSize, ...props}) => (
	<SelectWrapper inputSize={inputSize}>
		<StyledInput inputSize={inputSize} {...props}>
			{options?.map(({label, value}, optionIndex) => (
				<option key={optionIndex} value={label}>
					{value}
				</option>
			))}
		</StyledInput>
		<ExpandCircleDown/>
	</SelectWrapper>
);
