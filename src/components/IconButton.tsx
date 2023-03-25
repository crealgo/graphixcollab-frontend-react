import {css, styled} from '@mui/material';
import clsx from 'clsx';
import {forwardRef} from 'react';
import {_e} from '@utils/excludePropsFromForwarding';
import {getButtonColors, getButtonHoverColors, getButtonSizes} from '@utils/getButtonStyles';
import {type ButtonColors} from '@components/Button';
import {IconButtonBase, type IconButtonBaseProps} from '@components/IconButtonBase';

type IconButtonColors = ButtonColors;

export interface IconButtonProps extends IconButtonBaseProps {
	color?: IconButtonColors;
}

const StyledIconButton = styled(
	IconButtonBase,
	_e('color')
)<IconButtonProps>(
	({theme, color = 'text', size = 'medium'}) => css`
		font-weight: bold;
		background-color: ${getButtonColors({theme, color})};

		${getButtonSizes({theme, size})}
		padding: 0;

		&:hover,
		&:focus-visible {
			background-color: ${getButtonHoverColors({theme, color})};
		}
	`
);

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({children, className, color = 'tertiary', ...props}, ref) => (
		<StyledIconButton
			{...props}
			color={color}
			role='button'
			ref={ref}
			className={clsx(className, 'IconButton-root')}
		>
			{children}
		</StyledIconButton>
	)
);

IconButton.displayName = 'IconButton';
