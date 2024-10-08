import {styled} from '@mui/material';
import MuiButtonBase from '@mui/material/ButtonBase';
import {
	forwardRef,
	type ComponentPropsWithRef,
	type ElementType,
} from 'react';
import {_e} from '@graphixcollab/utils/excludePropsFromForwarding';
import {type ButtonBaseSizes} from './ButtonBase';

export type IconButtonBaseProps = {
	readonly href?: string;
	readonly Icon?: ElementType;
	readonly size?: ButtonBaseSizes;
} & ComponentPropsWithRef<'button'>;

const StyledButton = styled(
	MuiButtonBase,
	_e('endIcon', 'startIcon', 'size'),
)<IconButtonBaseProps>`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	border-radius: 0.25rem;
	height: 2.5rem;
	aspect-ratio: 1;
`;

export const IconButtonBase = forwardRef<
HTMLButtonElement,
IconButtonBaseProps
>(({children, Icon, ...props}, ref) => (
	<StyledButton {...props} ref={ref} role='button'>
		{children ? children : Icon ? <Icon/> : null}
	</StyledButton>
));

IconButtonBase.displayName = 'IconButtonBase';
