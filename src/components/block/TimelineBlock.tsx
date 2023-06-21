import styled from '@emotion/styled';
import { useMediaQuery, useTheme } from '@mui/material';
import { type FC } from 'react';
import timelines from '../../content/timelines.json';
import { Block } from '../base/Block';
import { Container } from '../base/Container';
import { Heading } from '../base/Heading';
import { Mark } from '../base/Mark';
import { MobileTimelineEvent } from '../base/MobileTimelineEvent';
import { Timeline } from '../base/Timeline';
import { TimelineEvent, type EventBlockProps } from '../base/TimelineEvent';

export type TimelineBlockProps = {
	events?: EventBlockProps[];
};

const Content = styled(Container)`
	display: grid;
	gap: 1rem;

	.Heading-root {
		text-align: center;
	}
`;

export const TimelineBlock: FC<TimelineBlockProps> = () => {
	const { breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('sm'));
	const currentTimeline = 0;

	const ResolvedEventComponent = isMobile
		? MobileTimelineEvent
		: TimelineEvent;

	return (
		<Block className="EventBlock-root">
			<Content>
				<Heading isCentered level={2} className="mb-4">
					See how we <Mark color="magenta">Screen Print</Mark>
				</Heading>
			</Content>
			<Timeline>
				{timelines[currentTimeline].steps.map((eventDetails, index) => (
					<ResolvedEventComponent
						key={index}
						stepNumber={index + 1}
						title={eventDetails.title}
						description={eventDetails.description}
						image={eventDetails.image}
					/>
				))}
			</Timeline>
		</Block>
	);
};
