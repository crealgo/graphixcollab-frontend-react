import {styled} from '@mui/material';
import {_e} from '../../../utils/excludePropsFromForwarding';
import {Container} from '../Container';
import {
	type PropsWithChildren,
	type FC,
	type ComponentPropsWithoutRef
} from 'react';

type HeaderBarProps = ComponentPropsWithoutRef<'header'> & {
	isScrolled?: boolean;
	isBranded?: boolean;
};

export const StyledHeaderBar = styled(
	'header',
	_e('isBranded', 'isScrolled')
)<HeaderBarProps>(({theme, isScrolled, isBranded}) => {
	const borderBottomColor = isScrolled
		? `${theme.palette.grey[200]}`
		: 'transparent';

	const backgroundColor = isScrolled
		? 'white'
		: isBranded
		? theme.palette.secondary.light
		: '';

	return /* scss */ `
		position: sticky;
		top: 0;
		transition: all 200ms;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		background-color: white;
		border-bottom-color: ${borderBottomColor};
		z-index: 999;

		padding-block: 0.25rem !important;
		backgroundColor: ${backgroundColor};
	`;
});

export const HeaderBar: FC<HeaderBarProps> = ({children, ...props}) => (
	<StyledHeaderBar {...props}>
		<Container>{children}</Container>
	</StyledHeaderBar>
);
