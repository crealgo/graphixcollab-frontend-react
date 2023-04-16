import {css, styled} from '@mui/material/styles';
import {type NextPage} from 'next';
import {useEffect, type ReactNode} from 'react';
import {FooterBlock, type FooterBlockProps} from '../components/block/FooterBlock';
import {PlaceholderBlock} from '../components/block/PlaceholderBlock';
import {type BannerProps} from '../components/base/Banner';
import {Header, type HeaderProps} from '../components/base/Header';
import {useAppState} from '../hooks/useAppState';

type DefaultLayoutProps = NextPage<{
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
	`,
);

// FIXME: figure out how to use grid
const Main = styled('main')(({theme}) => `
	display: grid;
	grid-template-columns: minmax(0, 1fr);

	${theme.breakpoints.up('md')} {
		gap: 1rem;
	}
`);

export const DefaultLayout: DefaultLayoutProps = ({HeaderProps, FooterProps, children}) => {
	const {setBannerProps, toggleContact, toggleBooking} = useAppState();

	useEffect(() => {
		setBannerProps({
			text: '⚡️⚡️ Flash Sash Sale!! Come and get yours quick!',
		});
	}, []);

	return (
		<>
			<Header
				{...HeaderProps}
				navigationItems={[
					{
						label: 'Home',
						href: '/',
					},
					{
						label: 'About',
						href: '/about',
					},
					{
						label: 'Graphix Collab',
						href: '/graphix-collab',
					},
					{
						label: 'Services',
						href: '/services',
					},
				]}
				actions={[
					{
						color: 'text',
						onClick() {
							toggleContact();
						},
						label: 'Contact Us',
					},
					{
						color: 'primary',
						onClick() {
							toggleContact();
						},
						label: 'Book a time',
					},
				]}
			/>
			<BackgroundImage className='Motif'>
				<BackgroundImageWrapper/>
			</BackgroundImage>
			<Main id='main-content'>
				{children}
				<PlaceholderBlock name='Yelp Block'/>
			</Main>
			<FooterBlock {...FooterProps}/>
		</>
	);
};
