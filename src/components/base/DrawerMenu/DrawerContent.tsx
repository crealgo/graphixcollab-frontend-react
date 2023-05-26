import {Close} from '@mui/icons-material';
import {type FC, type MouseEventHandler, type PropsWithChildren} from 'react';
import {type Action, type NavItemOptions} from '../../../types/general';
import {Heading} from '../Heading';
import {DrawerBoxClose} from './DrawerBoxClose';
import {TitleBox} from './TitleBox';
import {Wrapper} from './Wrapper';
import styled from '@emotion/styled';
import {useRouter} from 'next/router';

type DrawerContentProps = PropsWithChildren<{
	actions?: Action[];
	onCloseButtonClick?: MouseEventHandler<HTMLButtonElement>;
	navigationItems?: NavItemOptions[];
}>;

const StyledList = styled.ul`
	font-size: 2.5rem;

	list-style: none;
	display: grid;
	grid-template-columns: 1fr;
	place-items: start;
	place-content: start;
	gap: 1.25rem;

	margin: unset;
	padding: 2rem 1rem;
	flex: 1;
	border-top: solid 1px var(--color-gray-400);

	background-color: var(--color-gray-200);

	&:nth-last-of-type(1) {
		background-color: var(--color-white);
		flex: none;
		font-size: 2rem;
	}
`;

const StyledListItem = styled.li`
	display: block;
`;

const StyledLink = styled.a`
	display: flex;
	font-size: inherit;
	font-weight: 700;
	line-height: 1;

	opacity: 0.5;
	text-decoration: unset;
	color: var(--color-brand-key-main);

	&[aria-current='page'] {
		opacity: 1;
		text-decoration: underline;
		text-underline-offset: 0.125em;

		&:nth-of-type(1) {
			text-decoration-color: var(--color-brand-cyan-main);
		}
		&:nth-of-type(2) {
			text-decoration-color: var(--color-brand-magenta-main);
		}
		&:nth-of-type(3) {
			text-decoration-color: var(--color-brand-yellow-main);
		}
	}
`;

export const DrawerContent: FC<DrawerContentProps> = ({
	navigationItems,
	actions,
	onCloseButtonClick
}) => {
	const router = useRouter();

	console.log({actions});

	return (
		<Wrapper>
			<TitleBox>
				<Heading level={4}>Menu</Heading>
				<DrawerBoxClose onClick={onCloseButtonClick}>
					<Close fontSize="small" />
				</DrawerBoxClose>
			</TitleBox>
			<StyledList>
				{navigationItems?.map(({label, href}, itemIndex) => (
					<StyledListItem key={itemIndex}>
						<StyledLink
							href={href}
							aria-current={
								router.pathname === href ? 'page' : 'false'
							}
						>
							{label}
						</StyledLink>
					</StyledListItem>
				))}
			</StyledList>
			<StyledList>
				{actions?.map((action, itemIndex) => (
					<StyledListItem key={itemIndex}>
						<StyledLink href={action.href}>
							{action.label}
						</StyledLink>
					</StyledListItem>
				))}
			</StyledList>
		</Wrapper>
	);
};
