import {Block} from './Block';
import {ProfileCard} from './ProfileCard';
import {type EmployeeGroup} from '@graphixcollab/types/general';
import {css, styled} from '@mui/material/styles';
import clsx from 'clsx';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {Container} from './Container';
import {ContentGrid} from './ContentGrid';
import {Heading} from './Heading';
import {Text} from './Text';

export type ProfilesBlockProps = {
	// Title?: string;
	// description?: string;
	readonly profileGroups: EmployeeGroup[];
} & ComponentPropsWithoutRef<'div'>;

const Content = styled('div')(
	({theme}) => css`
		display: grid;

		.ProfilesBlock-profileGroup {
			display: grid;
			row-gap: 1rem;

			.ProfilesBlock-profiles {
				display: grid;
				grid-template-columns: repeat(1, 1fr);
				row-gap: 2rem;

				${theme.breakpoints.up('sm')} {
					grid-template-columns: repeat(3, 1fr);
				}

				${theme.breakpoints.up('md')} {
					grid-template-columns: repeat(4, 1fr);
				}
			}
		}
	`,
);

export const ProfilesBlock: FC<ProfilesBlockProps> = props => (
	<Content className={clsx(props.className, 'ProfilesBlock-root')}>
		{Array.isArray(props.profileGroups)
			? props.profileGroups.map((group, groupIndex) => (
				<Block
					key={groupIndex}
					color={2 % groupIndex === 0 ? 'grey' : undefined}
					className='ProfilesBlock-profileGroup'
				>
					<Container>
						<ContentGrid size='small'>
							<Heading level={3}>{group.title}</Heading>
							<Text variant='body'>{group.description}</Text>
							{Array.isArray(group.profiles) ? (
								<div className='ProfilesBlock-profiles'>
									{group.profiles.map(
										(profile, profileIndex) => (
											<ProfileCard
												key={profileIndex}
												profile={profile}
											/>
										),
									)}
								</div>
							) : null}
						</ContentGrid>
					</Container>
				</Block>
			))
			: null}
	</Content>
);
