import { ContentBox } from '@components/DrawerMenu/ContentBox';
import { DrawerBoxClose } from '@components/DrawerMenu/DrawerBoxClose';
import { FeaturedItems } from '@components/DrawerMenu/FeaturedItems';
import { TitleBox } from '@components/DrawerMenu/TitleBox';
import { Wrapper } from '@components/DrawerMenu/Wrapper';
import { LinkList } from '@components/LinkList';
import { Heading } from '@components/Heading';
import { type NavItemOptions } from '@global/generalTypes';
import { Close } from '@mui/icons-material';
import { generateFeaturedItems } from '@utils/chance';
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
