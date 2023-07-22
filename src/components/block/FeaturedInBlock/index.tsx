import styled from '@emotion/styled';
import {SiYelp} from '@icons-pack/react-simple-icons';
import {MessageOutlined} from '@mui/icons-material';
import {Typography, useMediaQuery, type Theme} from '@mui/material';
import clsx from 'clsx';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {type FeaturedCompanyInfo} from '../../../content/featured-companies';
import {type Action} from '../../../types/general';
import {ActionStack} from '../../base/ActionStack';
import {Container} from '../../base/Container';
import {ContentGrid} from '../../base/ContentGrid';
import {Heading} from '../../base/Heading';
import {Mark} from '../../base/Mark';
import {TidBit} from '../../base/TidBit';
import {CompanyFeatureLink} from './CompanyFeatureLink';
import {CustomBlock} from './CustomBlock';
import {FeaturedLogo} from './FeaturedLogo';
import {FeaturedLogoType} from './FeaturedLogoType';
import {FeaturedMarquee} from './FeaturedMarquee';
import {FeaturedText} from './FeaturedText';

export type FeaturedInBlockProps = {
	title?: string;
	description?: string;
	companies?: FeaturedCompanyInfo[];
	actions?: Action[];
} & ComponentPropsWithoutRef<'div'>;

const StyledContainer = styled(Container)`
	display: grid;
	gap: 1rem;

	.ActionStack-root {
		margin-top: 2.5rem;
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

	const FeaturedComponent = isMobile ? FeaturedGrid : FeaturedMarquee;

	return (
		<CustomBlock className={clsx(className, 'FeaturedInBlock-root')}>
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
				{companies?.length && (
					<FeaturedComponent>
						{companies.map(renderCompany)}
					</FeaturedComponent>
				)}
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
					<TidBit href='#yelp-test' color='magenta' icon={<SiYelp/>}>
						Trusted by <Mark color='magenta'>150+</Mark> on{' '}
						<Mark color='magenta'>Yelp</Mark>
					</TidBit>
				</ActionStack>
			</StyledContainer>
		</CustomBlock>
	);
};
