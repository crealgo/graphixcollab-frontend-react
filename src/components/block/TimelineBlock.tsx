import {Block} from '../base/Block';
import {useRef, type FC, useMemo, useState} from 'react';
import {Button} from '../base/Button';
import {Container} from '../base/Container';
import timelines from '../../content/timelines.json';
import {Heading} from '../base/Heading';
import {Select} from '../form/Select';
import {MobileTimelineEvent} from '../base/MobileTimelineEvent';
import {type EventBlockProps, TimelineEvent} from '../base/TimelineEvent';
import {Timeline} from '../base/Timeline';
import {useMediaQuery, useTheme} from '@mui/material';
import styled from '@emotion/styled';

export type TimelineBlockProps = {
	events?: EventBlockProps[];
};

const Switcher = styled('div')`
	display: flex;
	gap: 0.25rem;
	align-items: center;
	justify-content: center;
`;

const Content = styled(Container)`
	display: grid;
	gap: 1rem;

	.Heading-root {
		text-align: center;
	}
`;

export const TimelineBlock: FC<TimelineBlockProps> = ({events}) => {
	const {breakpoints} = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('sm'));
	const [currentTimeline, setCurrentTimeline] = useState(0);

	const ResolvedEventComponent = isMobile
		? MobileTimelineEvent
		: TimelineEvent;

	return (
		<Block className="EventBlock-root">
			<Content>
				<Heading level={2} className="mb-4">
					See how we work!
				</Heading>
				<Switcher>
					<span className="mr-2 font-semibold">Pick a process:</span>
					<Select
						defaultValue="T-Shirt Printing"
						options={timelines.map(t => ({
							label: t.title,
							value: t.slug
						}))}
						onChange={event => {
							const index = timelines.findIndex(
								({slug}) => slug === event.target.value
							);

							setCurrentTimeline(index);
						}}
					/>
				</Switcher>
			</Content>
			<Timeline>
				{timelines[currentTimeline].steps.map((eventDetails, index) => (
					<ResolvedEventComponent
						key={index}
						stepNumber={index + 1}
						{...eventDetails}
					/>
				))}
			</Timeline>
		</Block>
	);
};
