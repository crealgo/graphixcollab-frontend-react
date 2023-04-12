import {AddCircleOutline} from '@mui/icons-material';
import {Accordion, AccordionDetails, AccordionSummary, css, styled} from '@mui/material';
import {type FC} from 'react';
import {ActionStack} from './ActionStack';
import {type FaqOptions} from '../blocks/FaqBlock';

type FaqAccordionProps = FaqOptions;

const fontSize = '18px';
const fontHeight = '28px';

const Wrapper = styled(Accordion)(
	({theme, expanded}) => css`
		padding: 1rem 1rem;
		border-left: none;
		border-right: none;
		border-bottom: none;
		background-color: transparent;

		&:nth-of-type(1) {
			border-top: none;
		}

		.MuiSvgIcon-root {
			padding: 4px;
			height: ${fontHeight};
			width: ${fontHeight};

			display: block;
			margin-right: 0.25rem;
			opacity: 0.5;

			transition: all 300ms;
			transform: rotate(0deg);
		}

		.MuiAccordionSummary-root {
			display: flex;
			gap: 2rem;
			padding: 0;
			font-size: ${fontSize};
			line-height: ${fontHeight};

			font-weight: normal;
		}

		&.Mui-expanded {
			.MuiSvgIcon-root {
				transform: rotate(45deg);
				opacity: 1;
				color: ${theme.palette.primary.main};
			}
		}

		.MuiAccordionDetails-root {
			padding-left: calc(0.25rem + ${fontHeight});
		}
	`
);

const AccordionHead = styled(AccordionSummary)(({theme}) => ({
	...theme.typography.body2
}));

export const FaqAccordion: FC<FaqAccordionProps> = ({question, answer, actions, resources}) => (
	<Wrapper variant='outlined'>
		<AccordionHead>
			<AddCircleOutline />
			{question}
		</AccordionHead>
		<AccordionDetails>
			{answer}
			{actions && (
				<>
					<br />
					<br />
					<ActionStack size='small' actions={actions} />
				</>
			)}
		</AccordionDetails>
	</Wrapper>
);
