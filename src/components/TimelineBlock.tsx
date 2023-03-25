import {Block} from '@components/Block';
import {Timeline, type TimelineProps} from '@components/Timeline';
import {type FC} from 'react';
import {Container} from './Container';
import {ContentGrid} from './ContentGrid';
import {Heading} from './Heading';
import {Text} from './Text';

export interface TimelineBlockProps {
	title?: string;
	description?: string;
	TimelineProps?: TimelineProps;
}

export const TimelineBlock: FC<TimelineBlockProps> = ({description, title, TimelineProps}) => (
	<Block className='TimelineBlock-root'>
		<ContentGrid>
			<Container>
				<ContentGrid size='small' textAlign={'center'} marginX='auto' maxWidth='50rem'>
					<Heading level={1}>{title}</Heading>
					<Text variant='body' size='large'>
						{description}
					</Text>
				</ContentGrid>
			</Container>
			<Timeline {...TimelineProps} />
		</ContentGrid>
	</Block>
);
