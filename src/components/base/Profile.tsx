import {type Person} from '../../types/general';
import {Avatar, Link, styled, Typography} from '@mui/material';
import clsx from 'clsx';
import {type ComponentPropsWithoutRef, type FC} from 'react';

export type ProfileProps = {
	profile?: Person;
} & ComponentPropsWithoutRef<'div'>;

const ProfileWrapper = styled('div')`
	display: grid;
	column-gap: 0.75rem;
	grid-template-columns: auto 1fr;

	align-items: center;

	& .Avatar-root {
		width: 2.875rem;
		aspect-ratio: 1;
	}

	& .Profile-content {
		display: grid;
		grid-template-columns: 1fr;

		.Profile-username {
			margin-top: -3px;
		}
	}
`;

export const Profile: FC<ProfileProps> = ({className, profile}) => (
	<ProfileWrapper className={clsx(className, 'Profile-root')}>
		<Avatar src={profile?.avatar} alt={profile?.name} />
		<div className="Profile-content">
			<Typography
				className="Profile-name"
				variant="body2"
				fontWeight="bold"
			>
				{profile?.name}
			</Typography>
			<Link className="Profile-username" variant="body2">
				{profile?.username}
			</Link>
		</div>
	</ProfileWrapper>
);
