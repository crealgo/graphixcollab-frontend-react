import {styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {
	type Action,
	type SharedBlockProps,
	type SimpleLink,
} from '@graphixcollab/types/general';
import {Block} from './Block';
import {Container} from './Container';
import {ContentGrid} from './ContentGrid';
import {FaqAccordion} from './FaqAccordion';
import {Heading} from './Heading';

export type FaqOptions = {
	question: string;
	answer: string;
	actions?: Action[];
	resources?: SimpleLink;
};

export type FaqBlockProps = {
	readonly faqs: FaqOptions[];
} & SharedBlockProps &
ComponentPropsWithoutRef<'div'>;

const StyledBlockHeaderWrapper = styled('div')`
	margin-bottom: 2rem;
	justify-content: center;
	text-align: center;
`;

export const FaqBlock: FC<FaqBlockProps> = ({title, faqs}) => (
	<Container>
		<Block isRounded color='grey'>
			<ContentGrid>
				<Container size='small'>
					<StyledBlockHeaderWrapper>
						<Heading level={2}>{title}</Heading>
					</StyledBlockHeaderWrapper>
				</Container>
				<Container size='small'>
					{faqs?.map((faq, faqIndex) => (
						<FaqAccordion key={faqIndex} {...faq}/>
					))}
				</Container>
			</ContentGrid>
		</Block>
	</Container>
);
