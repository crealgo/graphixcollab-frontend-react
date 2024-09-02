import styled from '@emotion/styled';
import { type FeaturedCompanyInfo } from '@graphixcollab/content/featured-companies';
import { type Action } from '@graphixcollab/types/general';
import { MessageOutlined } from '@mui/icons-material';
import { Typography, useMediaQuery, type Theme } from '@mui/material';
import clsx from 'clsx';
import { type ComponentPropsWithoutRef, type FC } from 'react';
import { ActionStack } from '../ActionStack';
import { Block } from '../Block';
import { Container } from '../Container';
import { ContentGrid } from '../ContentGrid';
import { Heading } from '../Heading';
import { Mark } from '../Mark';
import { TidBit } from '../TidBit';
import { CompanyFeatureLink } from './CompanyFeatureLink';
import { FeaturedLogo } from './FeaturedLogo';
import { FeaturedLogoType } from './FeaturedLogoType';
import { FeaturedMarquee } from './FeaturedMarquee';
import { FeaturedText } from './FeaturedText';

export type FeaturedInBlockProps = {
	readonly title?: string;
	readonly description?: string;
	readonly companies?: FeaturedCompanyInfo[];
	readonly actions?: Action[];
} & ComponentPropsWithoutRef<'div'>;

const CustomBlock = styled(Block)`
	padding-top: 4rem !important;
	padding-bottom: 4rem !important;

	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
`;

const StyledContainer = styled(Container)`
	display: grid;
	gap: 1rem;

	.ActionStack-root {
		margin-top: 1rem;
	}
`;

const renderCompany = (company: FeaturedCompanyInfo, companyIndex: number) => {
	const resolvedContentType = {
		logo: <FeaturedLogo {...company}/>,
		type: <FeaturedLogoType {...company}/>,
		default: <FeaturedText {...company}/>,
	}[company.type ?? 'default'];

	return (
		<CompanyFeatureLink
			key={companyIndex}
			href={company.url}
			title={company.name}
		>
			{resolvedContentType}
		</CompanyFeatureLink>
	);
};

const FeaturedGrid = styled('div')`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	column-gap: 1rem;
	row-gap: 0;
	place-items: center;
	place-content: center;
`;

export const FeaturedInBlock: FC<FeaturedInBlockProps> = ({
	className,
	companies,
	...props
}) => {
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('sm'),
	);

	let FeaturedComponent: any = FeaturedMarquee;
	let componentProps: any = {gradient: true};

	if (isMobile) {
		FeaturedComponent = FeaturedGrid;
		componentProps = {};
	}

	return (
		<CustomBlock isClipped className={clsx(className, 'FeaturedInBlock-root')}>
			<StyledContainer>
				<ContentGrid
					size='small'
					textAlign='center'
					marginX='auto'
					maxWidth='50rem'
				>
					<Heading level={4}>
						We work with <Mark>creatives</Mark> like you.
					</Heading>
					{props.description ? (
						<Typography variant='body2'>
							{props.description}
						</Typography>
					) : null}
				</ContentGrid>
			</StyledContainer>
			{companies?.length && (
				<FeaturedComponent {...componentProps}>
					{companies.map(renderCompany)}
				</FeaturedComponent>
			)}
			<StyledContainer>
				<ActionStack
					align='center'
					size='large'
					actions={[
						{
							label: 'Leave a Review',
							color: 'text',
							endIcon: <MessageOutlined/>,
						},
					]}
				>
					<TidBit
						href='https://www.yelp.com/biz/fashion-greek-usc-los-angeles'
						color='magenta'
						icon={<i className='bx bxl-yelp'></i>}
					>
						Trusted by <Mark color='magenta'>150+</Mark> on{' '}
						<Mark color='magenta'>Yelp</Mark>
					</TidBit>
				</ActionStack>
			</StyledContainer>
		</CustomBlock>
	);
};
