import styled from '@emotion/styled';
import {type FC} from 'react';
import {Block} from '../base/Block';
import {Container} from '../base/Container';
import {Heading} from '../base/Heading';
import {Mark} from '../base/Mark';
import {Milestone} from '../base/Milestone';
import {Timeline} from '../base/Timeline';
import {type EventBlockProps} from '../base/TimelineEvent';

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

export const TimelineBlock: FC<TimelineBlockProps> = () => (
	<Block className='EventBlock-root'>
		<Content>
			<Heading isCentered level={2} className='mb-4'>
				Our Trusted <Mark color='magenta'>Process</Mark>
			</Heading>
		</Content>
		<Timeline>
			<Milestone
				stepNumber={1}
				title='Design'
				description='Praesentium ipsam est officiis ad vero nobis odio sit. Enim illum rerum quam ut non aliquid. Sed provident et qui a in deserunt doloremque provident. Velit maxime esse dolorem. Est reprehenderit sit qui unde enim maxime incidunt ut.'
				image='assets/process/screen-printing/design-creation-min@512w.webp'
			/>
			<Milestone
				stepNumber={2}
				title='Procurement'
				description='Praesentium ipsam est officiis ad vero nobis odio sit. Enim illum rerum quam ut non aliquid. Sed provident et qui a in deserunt doloremque provident. Velit maxime esse dolorem. Est reprehenderit sit qui unde enim maxime incidunt ut.'
				image='assets/process/screen-printing/prepared-screen-min@512w.webp'
			/>
			<Milestone
				stepNumber={3}
				title='Production'
				description='Praesentium ipsam est officiis ad vero nobis odio sit. Enim illum rerum quam ut non aliquid. Sed provident et qui a in deserunt doloremque provident. Velit maxime esse dolorem. Est reprehenderit sit qui unde enim maxime incidunt ut.'
				image='assets/process/screen-printing/screen-preparation-min@512w.webp'
			/>
			<Milestone
				stepNumber={4}
				title='Packing'
				description='Praesentium ipsam est officiis ad vero nobis odio sit. Enim illum rerum quam ut non aliquid. Sed provident et qui a in deserunt doloremque provident. Velit maxime esse dolorem. Est reprehenderit sit qui unde enim maxime incidunt ut.'
				image='assets/process/screen-printing/drying-and-curing-min@512w.webp'
			/>
		</Timeline>
	</Block>
);

// OLD
// export const TimelineBlock: FC<TimelineBlockProps> = () => {
// 	const {breakpoints} = useTheme();
// 	const isMobile = useMediaQuery(breakpoints.down('sm'));
// 	const currentTimeline = 0;

// 	const ResolvedEventComponent = isMobile
// 		? MobileTimelineEvent
// 		: TimelineEvent;

// 	return (
// 		<Block className='EventBlock-root'>
// 			<Content>
// 				<Heading isCentered level={2} className='mb-4'>
// 					See how we <Mark color='magenta'>Screen Print</Mark>
// 				</Heading>
// 			</Content>
// 			<Timeline>
// 				{timelines[currentTimeline].steps.map((eventDetails, index) => (
// 					<ResolvedEventComponent
// 						key={index}
// 						stepNumber={index + 1}
// 						title={eventDetails.title}
// 						description={eventDetails.description}
// 						image={eventDetails.image}
// 					/>
// 				))}
// 			</Timeline>
// 		</Block>
// 	);
// };
