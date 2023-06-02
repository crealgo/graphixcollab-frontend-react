import { css, styled } from '@mui/material/styles';
import Head from 'next/head';
import { type FC } from 'react';
import { type FeaturedCompanyInfo } from '../../../content/featured-companies';

type SpanProps = Pick<
	FeaturedCompanyInfo,
	'font' | 'styleOverrides' | 'mobileStyleOverrides'
>;

const StyledSpan = styled('span')<SpanProps>(
	({ theme, font, styleOverrides, mobileStyleOverrides }) => ({
		fontSize: '2rem',
		whiteSpace: 'nowrap',
		fontFamily: font,
		...styleOverrides,
		[theme.breakpoints.down('sm')]: {
			...mobileStyleOverrides
		}
	})
);

export const FeaturedLogoType: FC<FeaturedCompanyInfo> = props => {
	const resolvedFont = props.font ?? 'Karla';

	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href={`https://fonts.googleapis.com/css2?family=${resolvedFont}&display=swap`}
					rel="stylesheet"
				/>
			</Head>
			<StyledSpan
				font={resolvedFont}
				styleOverrides={props.styleOverrides}
				mobileStyleOverrides={props.mobileStyleOverrides}
			>
				{props.name}
			</StyledSpan>
		</>
	);
};
