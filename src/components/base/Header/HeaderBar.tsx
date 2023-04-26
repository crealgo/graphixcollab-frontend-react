import {css, styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {_e} from '../../../utils/excludePropsFromForwarding';
import {Container} from '../Container';

type HeaderBarProps = ComponentPropsWithoutRef<'header'> & {
	isScrolled?: boolean;
	isBranded?: boolean;
};

export const StyledHeaderBar = styled(
	'header',
	_e('isBranded', 'isScrolled')
)<HeaderBarProps>(({theme, isScrolled, isBranded}) => {
	const borderBottomColor = isScrolled
		? theme.palette.grey[200]
		: 'transparent';
	return css`
		position: sticky;
		top: 0;
		transition: all 200ms;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		background-color: white;
		border-bottom-color: ${borderBottomColor};
		z-index: 999;

		display: flex;
		align-items: center;
		padding-inline: 1.5rem;

		${theme.breakpoints.up('md')} {
			padding-inline: 2rem;
			/* margin-inline: 0.5rem; */
			height: 5rem;
		}

		${theme.breakpoints.up('xl')} {
			padding-inline: 4rem;
		}
	`;
});

export const HeaderBar: FC<HeaderBarProps> = ({children, ...props}) => (
	<StyledHeaderBar {...props}>
		<Container>{children}</Container>
	</StyledHeaderBar>
);
