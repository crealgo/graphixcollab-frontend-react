import {KeyboardArrowDown} from '@mui/icons-material';
import {
	css,
	alpha,
	Menu,
	MenuItem,
	styled,
	type OutlinedTextFieldProps
} from '@mui/material';
import {useState, type FC, type MouseEventHandler} from 'react';
import {type OptionValue} from '../../types/general';

export type InteractiveSelectorProps = {
	options?: OptionValue[];
} & Omit<OutlinedTextFieldProps, 'variant' | 'size'>;

const StyledButton = styled('button')(
	({theme}) => css`
		border-radius: unset;
		border: unset;
		outline: unset;
		background: unset;
		padding: unset;

		cursor: pointer;
		position: relative;
		display: inline-flex;
		align-items: center;

		z-index: 0;

		font: inherit;

		&::before {
			content: '';
			display: block;
			position: absolute;
			width: 102%;
			height: 90%;
			left: 50%;
			transform: translateX(-50%);

			background-color: ${alpha(theme.palette.secondary.main, 0.5)};
			z-index: -1;
		}

		.endIcon {
			font-size: 0.875em;
			margin-right: -0.5rem;
		}

		&:hover,
		&:focus-visible {
			&::before {
				background-color: ${alpha(theme.palette.secondary.main, 0.875)};
			}
		}
	`
);

export const InteractiveSelector: FC<InteractiveSelectorProps> = ({
	options,
	...props
}) => {
	const [value, setValue] = useState<string>(options ? options[0].label : '');
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | undefined>(
		undefined
	);
	const open = Boolean(anchorEl);

	const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(undefined);
	};

	const sharedProps = {
		open,
		anchorEl,
		onClose: handleClose
	};

	return (
		<>
			<StyledButton
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				type="button"
				value={value}
				onClick={handleClick}
			>
				{value}
				<KeyboardArrowDown className="endIcon" />
			</StyledButton>
			<Menu
				{...sharedProps}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
					'sx': {
						minWidth: '10rem'
					}
				}}
			>
				<MenuItem disabled>Choose one:</MenuItem>
				{options?.map((option, optionIndex) => (
					<MenuItem
						key={optionIndex}
						value={option.value}
						selected={option.value === value}
						onClick={() => {
							handleClose();
							setValue(option.label);
						}}
					>
						{option.label}
					</MenuItem>
				))}
			</Menu>
		</>
	);
};
