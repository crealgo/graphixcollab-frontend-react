import {styled} from '@mui/material/styles';
import {generateFeaturedItems} from '@graphixcollab/utils/chance.ts';
import {FeaturedItems} from './FeaturedItems';
import {Heading} from './Heading';
import {Text} from './Text';

const FlyoutContent = styled('div')`
	padding: 1.5rem;
`;

const FlyoutFeaturedItems = styled('div')`
	aspect-ratio: 2/1;
	max-width: 30rem;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const HeadingContent = styled('main')`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Flyout = () => (
	<FlyoutContent>
		<FlyoutFeaturedItems>
			<HeadingContent>
				<Heading level={3}>Sed ut perspiciatis unde omnis.</Heading>
				<Text>
					Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium, totam rem
					aperiam,
				</Text>
			</HeadingContent>
			<FeaturedItems items={generateFeaturedItems()}/>
		</FlyoutFeaturedItems>
	</FlyoutContent>
);
