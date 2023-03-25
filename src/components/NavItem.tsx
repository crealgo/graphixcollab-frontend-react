import { type FC } from 'react';
import { type NavItemOptions } from '@global/generalTypes';
import { Button, type ButtonProps } from '@components/Button';
import { css, styled } from '@mui/material/styles';
import { colorIterator } from '@utils/colorIterator';

export interface NavItemProps extends ButtonProps, NavItemOptions { }

const StyledButton = styled(Button)<{
	selected?: boolean;
}>(({ theme, selected }) => {

	return css`
		border: unset;
		box-shadow: unset;
		text-decoration: ${selected ? 'underline' : 'unset'};
		text-underline-offset: 2px;
		text-decoration-thickness: 2px;

		${colorIterator('text-decoration-color')};
	`
});

export const NavItem: FC<NavItemProps> = ({ label, children, selected, ...props }) => (
	<StyledButton selected={selected} size='small' color={selected ? 'tertiary' : 'text'} {...props}>
		{children ?? label}
	</StyledButton>
);
