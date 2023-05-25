import styled from '@emotion/styled';
import {SiYelp} from '@icons-pack/react-simple-icons';
import {MessageOutlined, Warning} from '@mui/icons-material';
import {type Theme, Typography, useMediaQuery} from '@mui/material';
import clsx from 'clsx';
import {
	type CSSProperties,
	type ComponentPropsWithoutRef,
	type FC
} from 'react';
import {type Action} from '../../../types/general';
import {ActionStack} from '../../base/ActionStack';
import {Container} from '../../base/Container';
import {ContentGrid} from '../../base/ContentGrid';
import {Heading} from '../../base/Heading';
import {StatusMessage} from '../../base/StatusMessage';
import {TidBit} from '../../base/TidBit';
import {CompanyFeatureLink} from './CompanyFeatureLink';
import {CustomBlock} from './CustomBlock';
import {FeaturedLogo} from './FeaturedLogo';
import {FeaturedMarquee} from './FeaturedMarquee';
import {FeaturedText} from './FeaturedText';
import {FeaturedLogoType} from './FeaturedLogoType';
import {type FeaturedCompanyInfo} from '../../../content/featured-companies';

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
		logo: <FeaturedLogo {...company} />,
		type: <FeaturedLogoType {...company} />,
		default: <FeaturedText {...company} />
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
		theme.breakpoints.down('sm')
	);

	const FeaturedComponent = isMobile ? FeaturedGrid : FeaturedMarquee;

	return (
		<CustomBlock className={clsx(className, 'FeaturedInBlock-root')}>
			<StyledContainer>
				<ContentGrid
					size="small"
					textAlign="center"
					marginX="auto"
					maxWidth="50rem"
				>
					<Heading level={4}>
						We work with <mark>creatives</mark> like you.
					</Heading>
					<Typography variant="body2">{props.description}</Typography>
				</ContentGrid>
				{companies?.length && (
					<FeaturedComponent>
						{companies.map(renderCompany)}
					</FeaturedComponent>
				)}
				<ActionStack
					align="center"
					size="large"
					actions={[
						{
							label: 'Leave a Review',
							color: 'text',
							endIcon: <MessageOutlined />
						}
					]}
				>
					<TidBit href="#yelp-test" icon={<SiYelp />}>
						Trusted by <mark>150+</mark> on <mark>Yelp</mark>
					</TidBit>
				</ActionStack>
			</StyledContainer>
		</CustomBlock>
	);
};
