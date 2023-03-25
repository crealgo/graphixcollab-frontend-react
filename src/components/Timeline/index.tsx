import { Container } from '@components/Container';
import { ContentGrid } from '@components/ContentGrid';
import { css, styled, Typography } from '@mui/material';
import { useState, type FC } from 'react';
import { getMilestoneState } from './getMilestoneState';
import { Milestone, MilestoneLabel, Milestones, type MileStoneValue } from './Milestone';

export type TimelineProps = {
	milestones?: MileStoneValue[];
	selectedIndex?: number;
};

const Wrapper = styled('div')(
	({theme}) => css`
		position: relative;
		width: 100%;
		overflow-y: hidden;
		background-color: ${theme.utils.styles.block.backgroundColor};
	`
);

const InlineWrapper = styled('div')(
	({theme}) => css`
		position: relative;
		min-width: ${theme.breakpoints.values.sm}px;
		display: block;
	`
);

const TimelineBarWrapper = styled('div')(
	({theme}) => css`
		position: absolute;
		${theme.utils.absoluteCenter};
		width: 100%;
		border-bottom: dashed 0.25rem ${theme.palette.grey[500]};
		z-index: 1;
	`
);

const TimelineBar = styled('div')<{
	selectedIndex?: number;
	milestoneCount?: number;
}>(
	({theme, selectedIndex = 0, milestoneCount = 0}) => css`
		height: 1rem;
		background-color: ${theme.palette.secondary.main};
		width: calc(${selectedIndex + 1} / ${milestoneCount} * 100% - (2 * 0.5rem + 0.5rem));
	`
);

const Content = styled('div')(
	({theme}) => css`
		${theme.utils.styles.block};

		display: grid;
		gap: 1rem;
		background-color: transparent;
		position: relative;

		border-left: solid 4px ${theme.palette.secondary.main};
		margin-left: 1rem;

		${theme.breakpoints.up('md')} {
			margin-left: 2rem;
		}
	`
);

const CustomContainer = styled('div')(({theme}) => ({
	maxWidth: '40rem',
	marginInline: '0 auto',
	padding: '2rem 1rem',
	backgroundColor: theme.palette.secondary.main
}));

export const Timeline: FC<TimelineProps> = ({milestones, selectedIndex = 0}) => {
	const [index, setIndex] = useState(selectedIndex);

	return (
		<>
			<Wrapper className='Timeline-root'>
				<InlineWrapper>
					<Milestones>
						<TimelineBarWrapper>
							<TimelineBar selectedIndex={selectedIndex} milestoneCount={milestones?.length ?? 0} />
						</TimelineBarWrapper>
						{milestones?.map((milestone, milestoneIndex) => (
							<Milestone
								key={milestoneIndex}
								state={getMilestoneState(selectedIndex, milestoneIndex)}
								selected={index === milestoneIndex}
								onClick={() => {
									setIndex(milestoneIndex);
								}}
							>
								<MilestoneLabel
									onClick={() => {
										setIndex(milestoneIndex);
									}}
									title={milestone.description}
									variant={milestoneIndex > selectedIndex ? 'grey' : 'secondary'}
								>
									{milestone.label}
								</MilestoneLabel>
							</Milestone>
						))}
					</Milestones>
				</InlineWrapper>
			</Wrapper>
			{/* <Popover open>
				<ContentGrid maxWidth={'30rem'} padding={'2rem'}>
					<Typography variant='overline' sx={{mb: -3}}>
						{'Step '}
						<b>{index + 1}</b>
						{' of '}
						<b>{milestones.length}</b>
					</Typography>
					<Typography variant='h3'>{milestones[index].label}</Typography>
					<Typography>{milestones[index].description}</Typography>
					<Typography variant='caption' color='primary'>
						<b>{'💡 Select a milestone to read the description'}</b>
					</Typography>
				</ContentGrid>
			</Popover> */}
			{milestones && (
				<Container>
					<CustomContainer>
						<ContentGrid size='small'>
							<Typography variant='overline' sx={{mb: -3}}>
								{'Step '}
								<b>{index + 1}</b>
								{' of '}
								<b>{milestones.length}</b>
							</Typography>
							<Typography variant='h3'>{milestones[index].label}</Typography>
							<Typography>{milestones[index].description}</Typography>
							<br />
							<Typography variant='caption' color='primary'>
								<b>{'💡 Select a milestone to read the description'}</b>
							</Typography>
						</ContentGrid>
					</CustomContainer>
				</Container>
			)}
		</>
	);
};
