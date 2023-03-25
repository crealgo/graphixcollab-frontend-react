import { Banner, BannerProps } from '@components/Banner';
import { FooterBlock, FooterBlockProps } from '@components/FooterBlock';
import { Header, HeaderProps } from '@components/Header';
import { PlaceholderBlock } from '@components/PlaceholderBlock';
import { css, styled } from '@mui/material/styles';
import { type NextPage } from 'next';
import { useState, type ReactNode } from 'react';
import { AppointmentBookingService } from '@components/AppointmentBookingService/index';

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

const BackgroundImageWrapper = styled('div')<{ flipped?: boolean }>(
	({ theme, flipped }) => css`
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

export const DefaultLayout: DefaultLayoutProps = ({
	HeaderProps, BannerProps, FooterProps,
	hideHeader, hideFooter, children
}) => {
	const [bannerOpen, setBannerOpen] = useState(true);

	return (
		<>
			{bannerOpen && (
				<Banner
					onCloseClick={() => {
						setBannerOpen(false);
					}}
					{...BannerProps}
				/>
			)}
			<AppointmentBookingService />
			{!hideHeader && (
				<Header
					navigationItems={[
						{
							label: 'Home',
							href: '/'
						},
						{
							label: 'About',
							href: '/about'
						},
						{
							label: 'Graphix Collab',
							href: '/graphix-collab'
						},
						{
							label: 'Services',
							href: '/services'
						}
					]}
					{...HeaderProps}
				/>
			)}
			<BackgroundImage className='Motif'>
				<BackgroundImageWrapper>
				</BackgroundImageWrapper>
			</BackgroundImage>
			{children}
			<PlaceholderBlock name='Yelp Block' />
			{!hideFooter && (
				<FooterBlock {...FooterProps} />
			)}
		</>
	);
};
