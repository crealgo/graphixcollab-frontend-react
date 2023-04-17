import {Block} from '../base/Block';
import {type FC} from 'react';
import {Button} from '../base/Button';
import {Container} from '../base/Container';
import defaultEvents from '../../assets/content/timeline-screen-printing';
import {Heading} from '../base/Heading';
import {Select} from '../form/Select';
import {MobileTimelineEvent} from '../base/MobileTimelineEvent';
import {type EventBlockProps, TimelineEvent} from '../base/TimelineEvent';
import {Timeline} from '../base/Timeline';
import {useMediaQuery, useTheme} from '@mui/material';
import styled from '@emotion/styled';

const Switcher = styled('div')`
	display: flex;
	gap: 0.25rem;
	align-items: center;
	justify-content: center;
`;

export const TimelineBlock: FC<{events?: EventBlockProps[]}> = ({events = defaultEvents}) => {
	const {breakpoints} = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('sm'));

	const ResolvedEventComponent = isMobile ? MobileTimelineEvent : TimelineEvent;

	return (
		<Block className='EventBlock-root'>
			<Container className='text-center'>
				<Heading level={2} className='mb-4'>
					See how we work!
				</Heading>
				<Switcher>
					<span className='mr-2 font-semibold'>Pick a process:</span>
					<Select
						defaultValue='T-Shirt Printing'
						options={[
							{label: 'T-Shirt Printing', value: 'T-Shirt Printing'},
							{label: 'Logo Design', value: 'Logo Design'},
							{label: 'Poster Printing', value: 'Poster Printing'},
						]}
					/>
					<Button color='secondary'>Update</Button>
				</Switcher>
			</Container>
			<Timeline>
				{events.map((eventDetails, index) => (
					<ResolvedEventComponent key={index} stepNumber={index + 1} {...eventDetails}/>
				))}
			</Timeline>
		</Block>
	);
};
