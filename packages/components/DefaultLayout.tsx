import BookATimeIcon from '@mui/icons-material/Book';
import ContactUsIcon from '@mui/icons-material/ContactSupport';
import {css, styled} from '@mui/material/styles';
import {type NextPage} from 'next';
import {useRouter} from 'next/router';
import {type ReactNode} from 'react';
import {type BannerProps} from './Banner';
import {type BreadcrumbOptions} from './Breadcrumbs';
import {Header, type HeaderProps} from './Header';
import {FooterBlock, type FooterBlockProps} from './FooterBlock';
import {YelpBlock} from './YelpBlock';

type DefaultLayoutProps = NextPage<{
	breadcrumbs?: BreadcrumbOptions[];
	children: ReactNode;
	showYelp?: boolean;
	hideHeader?: boolean;
	hideFooter?: boolean;
	HeaderProps?: HeaderProps;
	BannerProps?: BannerProps;
	FooterProps?: FooterBlockProps;
}>;

const Main = styled('main')`
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	margin-top: calc(-1 * var(--header-bar-height-mobile));

	${({theme}) => theme.breakpoints.up('md')} {
		margin-top: calc(-1 * var(--header-bar-height-desktop));
	}
`;

export const DefaultLayout: DefaultLayoutProps = ({children, ...props}) => {
	const router = useRouter();

	return (
		<>
			<Header
				actions={[
					{
						color: 'text',
						href: `${router.basePath}/contact-us`,
						label: 'Contact Us',
						endIcon: <ContactUsIcon/>,
					},
					{
						color: 'primary',
						href: `${router.basePath}/book-appointment`,
						label: 'Book a time',
						endIcon: <BookATimeIcon/>,
					},
				]}
			/>
			<Main id='main-content'>
				{children}
				{props.showYelp && <YelpBlock/>}
			</Main>
			<FooterBlock/>
		</>
	);
};
