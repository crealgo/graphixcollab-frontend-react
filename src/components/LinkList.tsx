import {css, styled} from '@mui/material/styles';
import {type PropsWithChildren, type FC} from 'react';
import {type NavItemOptions} from '@global/generalTypes';
import {Link} from '@components/Link';
import {LinkListItem} from '@components/LinkListItem';

export type LinkListProps = PropsWithChildren<{
	hasDivider?: boolean;
	items?: NavItemOptions[];
}>;

const LinkListUl = styled('ul')(
	({theme}) => css`
		list-style: none;
		padding: 0;
		margin: 0;
	`
);

export const LinkList: FC<LinkListProps> = ({children, hasDivider, items}) => (
	<LinkListUl>
		{items?.map(({label}, itemIndex) => (
			<LinkListItem key={itemIndex}>
				<Link>{label}</Link>
			</LinkListItem>
		))}
	</LinkListUl>
);
