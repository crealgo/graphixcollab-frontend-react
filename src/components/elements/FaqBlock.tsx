import {Box, css, styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {type Action, type SimpleLink, type SharedBlockProps} from '@global/generalTypes';
import {Block} from '@components/Block';
import {FaqAccordion} from '@components/FaqAccordion';
import {Heading} from '@components/Heading';
import {Container} from './Container';
import {ContentGrid} from './ContentGrid';

export type FaqOptions = {
	question: string;
	answer: string;
	actions?: Action[];
	resources?: SimpleLink;
};

export interface FaqBlockProps extends SharedBlockProps, ComponentPropsWithoutRef<'div'> {
	faqs: FaqOptions[];
}

const Content = styled('div')(
	({theme}) => css`
		display: grid;
		grid-template-columns: 1fr;

		${theme.breakpoints.up('md')} {
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
		}
	`
);

const StyledBlockHeaderWrapper = styled('div')(
	({theme}) => css`
		margin-bottom: 2rem;
		justify-content: center;
		text-align: center;
	`
);

export const FaqBlock: FC<FaqBlockProps> = ({title, subtitle, description, actions, faqs, children}) => {
	return (
		<Block color='grey'>
			<ContentGrid>
				<Container>
					<StyledBlockHeaderWrapper>
						<Heading level={2}>{title}</Heading>
					</StyledBlockHeaderWrapper>
				</Container>
				<Container maxWidth={'65rem !important'}>
					{faqs?.map((faq, faqIndex) => (
						<FaqAccordion key={faqIndex} {...faq} />
					))}
				</Container>
			</ContentGrid>
		</Block>
	);
};
