import {css, styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {_e} from '../../utils/src/excludePropsFromForwarding';
import {Container} from './Container';

type HeaderBarProps = ComponentPropsWithoutRef<'header'> & {
	readonly isScrolled?: boolean;
	readonly isBranded?: boolean;
};

export const StyledHeaderBar = styled(
	'header',
	_e('isBranded', 'isScrolled'),
)<HeaderBarProps>(({theme, isScrolled}) => {
	const backgroundColor = isScrolled ? 'white' : 'transparent';
	const borderBottomColor = isScrolled ? 'var(--color-brand-key-lightest)' : 'transparent';

	return css`
		position: sticky;
		top: 0;
		transition: all 300ms;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		background-color: ${backgroundColor};
		border-bottom-color: ${borderBottomColor};
		z-index: 999;

		display: flex;
		align-items: center;
		padding-block: 0.5rem;
		padding-inline: var(--section-mobile-padding-inline) 0.5rem;
		height: var(--header-bar-height-mobile);

		${theme.breakpoints.up('md')} {
			padding-inline: var(--section-tablet-padding-inline);
			height: var(--header-bar-height-desktop);
		}

		${theme.breakpoints.up('xl')} {
			padding-inline: var(--section-widescreen-padding-inline);
		}
	`;
});

export const HeaderBar: FC<HeaderBarProps> = ({children, ...props}) => (
	<StyledHeaderBar {...props}>
		<Container>{children}</Container>
	</StyledHeaderBar>
);
