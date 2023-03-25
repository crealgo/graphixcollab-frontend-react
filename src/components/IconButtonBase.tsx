import {type ButtonBaseSizes} from '@components/ButtonBase';
import {css, styled} from '@mui/material';
import MuiButtonBase from '@mui/material/ButtonBase';
import {_e} from '@utils/excludePropsFromForwarding';
import {forwardRef, type ComponentPropsWithRef, type ElementType} from 'react';
import NextLink from 'next/link';

export interface IconButtonBaseProps extends ComponentPropsWithRef<'button'> {
	href?: string;
	Icon?: ElementType;
	size?: ButtonBaseSizes;
}

const StyledButton = styled(
	MuiButtonBase,
	_e('endIcon', 'startIcon', 'size')
)<IconButtonBaseProps>(
	({theme, size = 'medium'}) => css`
		${theme.utils.inheritFont};
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;

		border-radius: 0.25rem;
		height: 2.5rem;
		aspect-ratio: 1;
	`
);

export const IconButtonBase = forwardRef<HTMLButtonElement, IconButtonBaseProps>(({children, Icon, ...props}, ref) => (
	<StyledButton {...props} as={props.href ? NextLink : undefined} role='button' ref={ref}>
		{children ? children : Icon ? <Icon /> : null}
	</StyledButton>
));

IconButtonBase.displayName = 'IconButtonBase';
