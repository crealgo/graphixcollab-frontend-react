import { ActionStack } from "../molecules/ActionStack";
import { Container } from "../molecules/Container";
import { DualPhoneDisplay } from "../molecules/DualPhoneDisplay";
import { type Action } from "../../types/general";
import { css, styled, Typography } from "@mui/material";
import { type FC } from "react";
import { Block } from "../molecules/Block";

export interface CalloutBlockProps {
	title?: string;
	description?: string;
	meta?: string;
	actions?: Action[];
}

const OuterWrapper = styled("div")(
	({ theme }) => `
    ${theme.breakpoints.up("md")} {
		margin: 1rem;
    }
`
);

const InnerWrapper = styled("div")(
	({ theme }) => css`
		padding: 1rem;
		position: relative;
		background-color: ${theme.palette.secondary.light};
		border-radius: 0.5rem;
		overflow: hidden;

		display: grid;
		grid-template-columns: 1fr 1fr;

		${theme.breakpoints.up("sm")} {
			padding-bottom: 0;
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
	`
);

export const CalloutBlock: FC<CalloutBlockProps> = ({ title, description, meta, actions }) => (
	<OuterWrapper>
		<Container>
			<InnerWrapper>
				<Block>
					<Typography variant="overline" className="CalloutBlock-title">
						{meta}
					</Typography>
					<Typography variant="h2" className="CalloutBlock-title">
						{title}
					</Typography>
					<Typography variant="body2" className="CalloutBlock-description" sx={{ mb: 2 }}>
						{description}
					</Typography>
					<ActionStack size="large" actions={actions} />
				</Block>
				<DualPhoneDisplay />
			</InnerWrapper>
		</Container>
	</OuterWrapper>
);
