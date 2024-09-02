import {styled} from '@mui/material/styles';
import {type FC, type PropsWithChildren} from 'react';
import {type NavItemOptions} from '@graphixcollab/types/general.d.ts';
import {Link} from './Link';
import {LinkListItem} from './LinkListItem';

export type LinkListProps = PropsWithChildren<{
	// hasDivider?: boolean;
	readonly items?: NavItemOptions[];
}>;

const LinkListUl = styled('ul')`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const LinkList: FC<LinkListProps> = ({items}) => (
	<LinkListUl>
		{items?.map(({label, href}, itemIndex) => (
			<LinkListItem key={itemIndex}>
				<Link href={href ?? ''}>{label}</Link>
			</LinkListItem>
		))}
	</LinkListUl>
);
