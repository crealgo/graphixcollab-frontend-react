import { _e } from '@graphixcollab/utils/excludePropsFromForwarding';
import { css, styled } from '@mui/material';
import MuiButtonBase from '@mui/material/ButtonBase';
import {
	ReactNode,
	type ComponentPropsWithoutRef,
	type FC
} from 'react';

export type ButtonBaseSizes = Size;

export type ButtonBaseProps = {
	readonly endIcon?: ReactNode;
	readonly startIcon?: ReactNode;
	readonly href?: string;
	readonly size?: ButtonBaseSizes;
	readonly color?: ColorVariant;
} & Omit<ComponentPropsWithoutRef<'button'>, 'color'>;

const StyledButton = styled(
	MuiButtonBase,
	_e('endIcon', 'startIcon', 'size'),
)<ButtonBaseProps>(
	({size = 'medium'}) => css`
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: var(--button-spacing-gap-${size});

		font-family: inherit;

		letter-spacing: -0.0156rem;
		white-space: nowrap;

		border-radius: 0.25rem;
	`,
);

type ButtonIconProps = {
	start?: boolean;
	end?: boolean;
};

const ButtonIcon = styled(
	'span',
	_e('end', 'start'),
)<ButtonIconProps>(
	({start, end}) => /* scss */ `
	svg {
		height: 0.875em;
		width: 0.875em;
	}

	display: inline-flex;
	${start ? 'margin-left: -0.25rem;' : ''}
	${end ? 'margin-right: -0.25rem;' : ''}
`,
);

export const ButtonBase: FC<ButtonBaseProps> = ({
	children,
	startIcon,
	endIcon,
	onClick,
	...props
}) => (
	<StyledButton
		{...props}
		role='button'
		onClick={event => {
			if (onClick) {
				event.preventDefault();
				onClick(event);
			}
		}}
	>
		{startIcon && (
			<ButtonIcon start className='Button-icon Button-startIcon'>
				{startIcon}
			</ButtonIcon>
		)}
		{children}
		{endIcon && (
			<ButtonIcon end className='Button-icon Button-endIcon'>
				{endIcon}
			</ButtonIcon>
		)}
	</StyledButton>
);
