import { css, styled } from "@mui/material";
import { type ComponentPropsWithoutRef, type FC } from "react";
import { type Action, type SharedBlockProps, type SimpleLink } from "../../types/general";
import { Block } from "../molecules/Block";
import { Container } from "../molecules/Container";
import { ContentGrid } from "../molecules/ContentGrid";
import { FaqAccordion } from "../molecules/FaqAccordion";
import { Heading } from "../molecules/Heading";

export type FaqOptions = {
	question: string;
	answer: string;
	actions?: Action[];
	resources?: SimpleLink;
};

export interface FaqBlockProps extends SharedBlockProps, ComponentPropsWithoutRef<"div"> {
	faqs: FaqOptions[];
}

const StyledBlockHeaderWrapper = styled("div")(
	({ theme }) => css`
		margin-bottom: 2rem;
		justify-content: center;
		text-align: center;
	`
);

export const FaqBlock: FC<FaqBlockProps> = ({ title, subtitle, description, actions, faqs, children }) => {
	return (
		<Block color="grey">
			<ContentGrid>
				<Container>
					<StyledBlockHeaderWrapper>
						<Heading level={2}>{title}</Heading>
					</StyledBlockHeaderWrapper>
				</Container>
				<Container>
					{faqs?.map((faq, faqIndex) => (
						<FaqAccordion key={faqIndex} {...faq} />
					))}
				</Container>
			</ContentGrid>
		</Block>
	);
};
