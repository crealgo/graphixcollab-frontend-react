import styled from '@emotion/styled';
import Head from 'next/head';
import {type FC} from 'react';
import {type FeaturedCompanyInfo} from '../../../content/featured-companies';

const StyledSpan = styled.span`
	font-size: 2rem;
	white-space: nowrap;
`;

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
				style={{
					fontFamily: resolvedFont,
					...props.styleOverrides
				}}
			>
				{props.name}
			</StyledSpan>
		</>
	);
};
