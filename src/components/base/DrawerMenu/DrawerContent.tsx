import { ContentBox } from './ContentBox';
import { DrawerBoxClose } from './DrawerBoxClose';
import { FeaturedItems } from './FeaturedItems';
import { TitleBox } from './TitleBox';
import { Wrapper } from './Wrapper';
import { LinkList } from '../LinkList';
import { Heading } from '../Heading';
import { type NavItemOptions } from '../../../types/general';
import { Close } from '@mui/icons-material';
import { generateFeaturedItems } from '../../../utils/chance';
import { type FC, type MouseEventHandler, type PropsWithChildren } from 'react';

type DrawerContentProps = PropsWithChildren<{
	onCloseButtonClick?: MouseEventHandler<HTMLButtonElement>;
	navigationItems?: NavItemOptions[];
}>;
export const DrawerContent: FC<DrawerContentProps> = ({navigationItems, onCloseButtonClick}) => (
	<Wrapper>
		<TitleBox hasBorder>
			<Heading level={2}>Menu</Heading>
			<DrawerBoxClose onClick={onCloseButtonClick}>
				<Close fontSize='small' />
			</DrawerBoxClose>
		</TitleBox>
		<ContentBox isColored hasBorder>
			<Heading level={3}>Quick Links</Heading>
			<FeaturedItems items={generateFeaturedItems()} />
		</ContentBox>
		<ContentBox>
			<Heading level={3}>SubMenu</Heading>
			<LinkList items={navigationItems} />
		</ContentBox>
	</Wrapper>
);
