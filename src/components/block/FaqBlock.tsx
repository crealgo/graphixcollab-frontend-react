import {css, styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {type Action, type SharedBlockProps, type SimpleLink} from '../../types/general';
import {Block} from '../base/Block';
import {Container} from '../base/Container';
import {ContentGrid} from '../base/ContentGrid';
import {FaqAccordion} from '../base/FaqAccordion';
import {Heading} from '../base/Heading';

export type FaqOptions = {
	question: string;
	answer: string;
	actions?: Action[];
	resources?: SimpleLink;
};

export type FaqBlockProps = {
	faqs: FaqOptions[];
} & SharedBlockProps & ComponentPropsWithoutRef<'div'>;

const StyledBlockHeaderWrapper = styled('div')(
	({theme}) => css`
		margin-bottom: 2rem;
		justify-content: center;
		text-align: center;
	`,
);

export const FaqBlock: FC<FaqBlockProps> = ({title, subtitle, description, actions, faqs, children}) => (
	<Block color='grey'>
		<ContentGrid>
			<Container>
				<StyledBlockHeaderWrapper>
					<Heading level={2}>{title}</Heading>
				</StyledBlockHeaderWrapper>
			</Container>
			<Container>
				{faqs?.map((faq, faqIndex) => (
					<FaqAccordion key={faqIndex} {...faq}/>
				))}
			</Container>
		</ContentGrid>
	</Block>
);
