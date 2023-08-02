import BookATimeIcon from '@mui/icons-material/Book';
import ContactUsIcon from '@mui/icons-material/ContactSupport';
import {css, styled} from '@mui/material/styles';
import {type NextPage} from 'next';
import {useRouter} from 'next/router';
import {type ReactNode} from 'react';
import {type BannerProps} from '../components/base/Banner';
import {type BreadcrumbOptions} from '../components/base/Breadcrumbs';
import {Header, type HeaderProps} from '../components/base/Header/Header';
import {FooterBlock, type FooterBlockProps} from '../components/block/FooterBlock';
import {YelpBlock} from '../components/block/YelpBlock';

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

const BackgroundImage = styled('div')`
	z-index: -1;
	position: absolute;
	opacity: 0.125;

	width: 100%;
	overflow: hidden;
	height: inherit;
`;

const BackgroundImageWrapper = styled('div')<{flipped?: boolean}>(
	({theme, flipped}) => css`
		width: 3322px;
		height: auto;

		top: 60%;
		transform: rotate(15deg) ${flipped ? 'scaleX(-1)' : ''};

		${theme.breakpoints.up('md')} {
			top: 25%;
			transform: rotate(30deg) ${flipped ? 'scaleX(-1)' : ''};
		}
	`,
);

const Main = styled('main')`
	display: grid;
	grid-template-columns: minmax(0, 1fr);
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
			<BackgroundImage className='Motif'>
				<BackgroundImageWrapper/>
			</BackgroundImage>
			<Main id='main-content'>
				{children}
				{props.showYelp && <YelpBlock/>}
			</Main>
			<FooterBlock/>
		</>
	);
};

// design - ideation
// prep-work - procurement
// production - work
// packing, delivery type
