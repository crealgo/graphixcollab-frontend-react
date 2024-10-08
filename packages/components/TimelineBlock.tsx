import styled from '@emotion/styled';
import {type FC} from 'react';
import {Block} from './Block';
import {Container} from './Container';
import {Heading} from './Heading';
import {Mark} from './Mark';
import {Milestone} from './Milestone';
import {Timeline} from './Timeline';
import {type EventBlockProps} from './TimelineEvent';

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

const milestones = [
	{
		stepNumber: 1,
		title: 'Design',
		image: 'assets/process/screen-printing/design-creation-min@512w.webp',
		description: 'The design phase involves working with you to create custom print materials. We collaborate with you to understand your needs, design layouts, choose colors, and/or finalize the printing specifications.',
	},
	{
		stepNumber: 2,
		title: 'Procurement',
		image: 'assets/process/screen-printing/prepared-screen-min@512w.webp',
		description: 'We gather all the necessary printing materials and equipment. This includes buying ink, t-shirts, sashes, mugs, and other supplies needed for different print jobs.',
	},
	{
		stepNumber: 3,
		title: 'Product',
		image: 'assets/process/screen-printing/print-machine-min@512w.webp',
		description: 'Here we actually print the materials. We load the designs, set up the materials, and produce the printed products.',
	},
	{
		stepNumber: 4,
		title: 'Packing',
		image: 'assets/process/screen-printing/screen-preparation-min@512w.webp',
		description: 'Once the printing is done, we might trim, fold, or bind them based on client requirements. And then, finally package the finished prints, ensuring they are protected during transit or for delivery to clients. It\'s like preparing the printed materials for safe and attractive presentation to the clients or for shipping to their destinations.',
	},
];

export const TimelineBlock: FC<TimelineBlockProps> = () => (
	<Block className='EventBlock-root'>
		<Content>
			<Heading isCentered level={2} className='mb-4'>
				Our Trusted <Mark color='magenta'>Process</Mark>
			</Heading>
		</Content>
		<Timeline>
			{milestones.map(milestone => (
				<Milestone key={milestone.stepNumber} {...milestone}/>
			))}
		</Timeline>
	</Block>
);
