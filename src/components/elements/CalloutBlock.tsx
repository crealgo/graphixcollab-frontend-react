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
		.content {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.image {
			display: none;
		}

		${theme.breakpoints.up("md")} {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 3rem;

			.image {
				display: block;
				position: absolute;
				margin: unset;
				width: 50%;
				height: 100%;
				right: 0;
				bottom: 0;
				background: blue;

				img {
					height: 100%;
					width: 100%;
					object-fit: contain;
				}
			}
		}
	`
);

export const CalloutBlock: FC<CalloutBlockProps> = ({ title, description, meta, actions }) => (
	<Container>
		<Block color="secondary" rounded>
			<InnerWrapper>
				<div className="content">
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
				</div>
				<div className="image">
					<DualPhoneDisplay />
				</div>
			</InnerWrapper>
		</Block>
	</Container>
);
