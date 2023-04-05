import {StatusMessage} from '@components/StatusMessage';
import {type Action} from '@global/generalTypes';
import {Warning} from '@mui/icons-material';
import {styled, Typography} from '@mui/material';
import clsx from 'clsx';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import Marquee from 'react-fast-marquee';
import {Block} from './Block';
import {Container} from './Container';
import {ContentGrid} from './ContentGrid';
import {Heading} from './Heading';

export interface FeaturedInBlock extends ComponentPropsWithoutRef<'div'> {
	title?: string;
	description?: string;
	companies?: Array<{
		name: string;
		url: string;
	}>;
	actions?: Action[];
}

const CustomBlock = styled(Block)(({theme}) => ({
	paddingTop: '2.5rem !important',
	paddingBottom: '2.5rem !important',

	'& .Container-root': {
		marginBottom: '3rem'
	}
}));

export const FeaturedInBlock: FC<FeaturedInBlock> = ({className, companies, ...props}) => (
	<CustomBlock className={clsx(className, 'FeaturedInBlock-root')}>
		<Container isContained>
			<ContentGrid size='small' textAlign={'center'} marginX='auto' maxWidth='50rem'>
				<Heading level={3}>{props.title}</Heading>
				<Typography variant='body2'>{props.description}</Typography>
			</ContentGrid>
			{companies?.length ? (
				<Marquee
					style={{
						overflow: 'hidden'
					}}
					pauseOnHover
				>
					{companies.map((company, companyIndex) => (
						<Typography
							marginX='2rem'
							key={companyIndex}
							variant='h1'
							color={'grey.500'}
							sx={{
								cursor: 'pointer',
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
				<StatusMessage contained IconComponent={Warning} text='No Images Available' />
			)}
		</Container>
	</CustomBlock>
);
