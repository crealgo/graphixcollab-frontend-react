import { css, styled } from '@mui/material';
import { type ComponentPropsWithoutRef, type FC } from 'react';
import { _e } from '../../../utils/excludePropsFromForwarding';
import { Container } from '../Container';

type HeaderBarProps = ComponentPropsWithoutRef<'header'> & {
	isScrolled?: boolean;
	isBranded?: boolean;
};

export const StyledHeaderBar = styled(
	'header',
	_e('isBranded', 'isScrolled')
)<HeaderBarProps>(({ theme, isScrolled }) => {
	const backgroundColor = isScrolled ? 'white' : 'transparent';
	const borderBottomColor = isScrolled
		? theme.palette.grey[200]
		: 'transparent';

	return css`
		position: sticky;
		top: 0;
		transition: all 100ms;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		background-color: ${backgroundColor};
		border-bottom-color: ${borderBottomColor};
		z-index: 999;

		display: flex;
		align-items: center;
		padding-block: 0.5rem;
		padding-inline: var(--section-mobile-padding-inline) 0.5rem;

		${theme.breakpoints.up('md')} {
			padding-inline: var(--section-tablet-padding-inline);
			height: 5rem;
		}

		${theme.breakpoints.up('xl')} {
			padding-inline: var(--section-widescreen-padding-inline);
		}
	`;
});

export const HeaderBar: FC<HeaderBarProps> = ({ children, ...props }) => (
	<StyledHeaderBar {...props}>
		<Container>{children}</Container>
	</StyledHeaderBar>
);
