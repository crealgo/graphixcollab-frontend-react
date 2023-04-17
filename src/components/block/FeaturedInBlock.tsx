import {Warning} from '@mui/icons-material';
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

export type FeaturedInBlockProps = {
	title?: string;
	description?: string;
	companies?: Array<{
		name: string;
		url: string;
	}>;
	actions?: Action[];
} & ComponentPropsWithoutRef<'div'>;

const CustomBlock = styled(Block)`
	padding-top: 2.5rem !important;
	padding-bottom: 2.5rem !important;

	& .Container-root {
		margin-bottom: 3rem;
	}
`;

export const FeaturedInBlock: FC<FeaturedInBlockProps> = ({className, companies, ...props}) => (
	<CustomBlock className={clsx(className, 'FeaturedInBlock-root')}>
		<Container>
			<ContentGrid size='small' textAlign='center' marginX='auto' maxWidth='50rem'>
				<Heading level={3}>{props.title}</Heading>
				<Typography variant='body2'>{props.description}</Typography>
			</ContentGrid>
			{companies?.length ? (
				<Marquee
					pauseOnHover
					style={{
						overflow: 'hidden',
					}}
				>
					{companies.map((company, companyIndex) => (
						<Typography
							key={companyIndex}
							marginX='2rem'
							variant='h1'
							color='grey.500'
							sx={{
								cursor: 'pointer',
								'&:hover': {
									color: 'grey.700',
								},
							}}
						>
							{company.name}
						</Typography>
					))}
				</Marquee>
			) : (
				<StatusMessage isContained IconComponent={Warning} text='No Images Available'/>
			)}
		</Container>
	</CustomBlock>
);
