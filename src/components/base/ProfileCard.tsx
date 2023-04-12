import {Business} from '@mui/icons-material';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {type FC} from 'react';
import {type Employee} from '../../types/general';
import {Image} from './Image';
import {StatusMessage} from './StatusMessage';

export interface ProfileCardProps {
	profile?: Employee;
}

const ProfileCardWrapper = styled('div')`
	.Image-root {
		aspect-ratio: 0.75;
		border: none;
	}

	.ProfileCard-info {
		display: grid;
		gap: 0.25rem;

		padding-block: 0.5rem;
		padding-right: 1rem;
	}
`;

export const ProfileCard: FC<ProfileCardProps> = ({profile}) => profile ? (
	<ProfileCardWrapper className='ProfileCard-root'>
		<Image
			// ImageElementProps={{
			// 	src: profile.photo ?? 'https://picsum.photos/300'
			// }}
		/>
		<div className='ProfileCard-info'>
			<Typography variant='h5' noWrap>
				{profile.name}
			</Typography>
			<StatusMessage IconComponent={Business} text={profile.jobTitle} />
			<Typography color={'primary'}>Interests</Typography>
		</div>
	</ProfileCardWrapper>
) : null;
