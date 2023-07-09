import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useState, type FC, type ChangeEventHandler } from 'react';

export type InteractiveSelectorProps = {
	color?: 'cyan' | 'magenta' | 'yellow' | 'key';
	options?: OptionBag[];
};

const ClickBox = styled.button<InteractiveSelectorProps>(
	({ color = 'cyan' }) => css`
		background: unset;
		border-radius: 0rem;
		outline: unset;
		padding: unset;

		position: relative;
		box-sizing: border-box;

		display: inline-flex;
		place-items: center;

		background: var(--color-brand-${color}-lighter);
		border: none;
		border-block-end: solid 0.25rem var(--color-brand-${color}-main);

		z-index: 0;

		font: inherit;
		color: inherit;

		.endIcon {
			font-size: 0.875em;
			margin-right: -0.5rem;
		}

		&:hover,
		&:focus-visible {
			background-color: var(--color-brand-${color}-light);
		}
	`
);

const StyledSelect = styled.select`
	border-radius: 0rem;
	cursor: pointer;

	position: absolute;
	opacity: 0;
	inset: 50% 0 0 0;
	transform: translateY(-50%);
	width: 100%;
	height: 100%;
`;

export const InteractiveSelector: FC<InteractiveSelectorProps> = ({
	options = [],
	...props
}) => {
	const [index, setIndex] = useState(0);

	const handleChange: ChangeEventHandler<HTMLSelectElement> = event => {
		setIndex(event.currentTarget.selectedIndex);
	};

	return (
		<ClickBox {...props}>
			{options[index].label}
			<KeyboardArrowDown className="endIcon" />
			<StyledSelect
				className="InteractiveSelector-select"
				onChange={handleChange}
			>
				{options?.map((option, optionIndex) => (
					<option key={optionIndex} value={option.value}>
						{option.label}
					</option>
				))}
			</StyledSelect>
		</ClickBox>
	);
};
