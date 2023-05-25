import {css, styled} from '@mui/material/styles';
import {type NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect, type ReactNode} from 'react';
import {type BannerProps} from '../components/base/Banner';
import {type BreadcrumbOptions} from '../components/base/Breadcrumbs';
import {Header, type HeaderProps} from '../components/base/Header/Header';
import {
	FooterBlock,
	type FooterBlockProps
} from '../components/block/FooterBlock';
import {PageHeaderBlock} from '../components/block/PageHeaderBlock';
import {YelpBlock} from '../components/block/YelpBlock';
import {useAppState} from '../hooks/useAppState';

type DefaultLayoutProps = NextPage<{
	pageTitle?: string;
	breadcrumbs?: BreadcrumbOptions[];
	children: ReactNode;
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
	`
);

const Main = styled('main')(
	({theme}) => css`
		display: grid;
		grid-template-columns: minmax(0, 1fr);

		${theme.breakpoints.up('md')} {
			padding-bottom: 1rem;
			gap: 1rem;
		}
	`
);

export const DefaultLayout: DefaultLayoutProps = ({
	pageTitle,
	HeaderProps,
	FooterProps,
	children
}) => {
	const {setBannerProps, toggleContact, toggleBooking} = useAppState();

	const router = useRouter();

	useEffect(() => {
		setBannerProps({
			text: '⚡️⚡️ Flash Sash Sale!! Come and get yours quick!'
		});
	}, []);

	const hasPageHeader = router.pathname !== '/';

	return (
		<>
			<Head>
				<title>{pageTitle ?? 'Fashion Greek, USC'}</title>
			</Head>
			<Header
				{...HeaderProps}
				actions={[
					{
						color: 'text',
						onClick() {
							toggleContact();
						},
						label: 'Contact Us'
					},
					{
						color: 'primary',
						href: `${router.basePath}/book-appointment`,
						label: 'Book a time'
					}
				]}
			/>
			<BackgroundImage className="Motif">
				<BackgroundImageWrapper />
			</BackgroundImage>
			{/* {hasPageHeader && (
				<PageHeaderBlock
					breadcrumbs={[
						{
							label: 'Home',
							href: `${router.basePath}/`
						},
						{
							label: 'Services'
						}
					]}
					title={pageTitle ?? 'Page Title'}
				/>
			)} */}
			<Main id="main-content">
				{children}
				<YelpBlock />
			</Main>
			<FooterBlock />
		</>
	);
};
