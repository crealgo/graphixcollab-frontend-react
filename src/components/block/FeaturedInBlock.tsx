import {MessageOutlined, Warning} from '@mui/icons-material';
import {styled, Typography} from '@mui/material';
import clsx from 'clsx';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import Marquee from 'react-fast-marquee';
import {type Action} from '../../types/general';
import {Block} from '../base/Block';
import {Container} from '../base/Container';
import {ContentGrid} from '../base/ContentGrid';
import {Heading} from '../base/Heading';
import {StatusMessage} from '../base/StatusMessage';
import {SiYelp} from '@icons-pack/react-simple-icons';
import {TidBit} from '../base/TidBit';
import {ActionStack} from '../base/ActionStack';

export type FeaturedInBlockProps = {
	title?: string;
	description?: string;
	companies?: Array<{
		name: string;
		url: string;
	}>;
	actions?: Action[];
} & ComponentPropsWithoutRef<'div'>;

const StyledContainer = styled(Container)`
	display: grid;
	gap: 1rem;

	.ActionStack-root {
		margin-top: 2.5rem;
	}
`;

const CustomBlock = styled(Block)`
	padding-top: 4rem !important;
	padding-bottom: 4rem !important;
`;

export const FeaturedInBlock: FC<FeaturedInBlockProps> = ({
	className,
	companies,
	...props
}) => (
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
			{companies?.length ? (
				<Marquee
					pauseOnHover
					style={{
						overflow: 'hidden'
					}}
				>
					{companies.map((company, companyIndex) => (
						<Typography
							key={companyIndex}
							marginX="2rem"
							variant="h1"
							color="grey.500"
							sx={{
								'cursor': 'pointer',
								'&:hover': {
									color: 'grey.700'
								}
							}}
						>
							{company.name}
						</Typography>
					))}
				</Marquee>
			) : (
				<StatusMessage
					isContained
					IconComponent={Warning}
					text="No Images Available"
				/>
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
