import { InteractiveSelector } from "../molecules/InteractiveSelector";
import { type Action } from "../../types/general";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { type FC } from "react";
import { ActionStack } from "../molecules/ActionStack";
import { Block } from "../molecules/Block";
import { Container } from "../molecules/Container";
import { ContentGrid } from "../molecules/ContentGrid";
import { Heading } from "../molecules/Heading";

export type InteractiveEstimatorProps = {
	actions?: Action[];
};

export const InteractiveEstimator: FC<InteractiveEstimatorProps> = ({ actions }) => (
	<Container>
		<Block rounded color="grey" className="InteractiveEstimator-root">
			<ContentGrid maxWidth="65rem" marginX="auto" justifyItems={"center"} textAlign="center">
				<Typography variant="body1">💡 Change the options below to what you’re looking for.</Typography>
				<Heading level={1}>
					{"I would like a custom "}
					<InteractiveSelector
						options={[
							{
								label: "Sash",
								value: "sash",
							},
							{
								label: "T-Shirt",
								value: "t-shirt",
							},
							{
								label: "Poster",
								value: "poster",
							},
							{
								label: "Sticker",
								value: "sticker",
							},
						]}
					/>
					{" that is "}
					<InteractiveSelector
						options={[
							{
								label: "embroidered",
								value: "embroidered",
							},
							{
								label: "printed",
								value: "printed",
							},
						]}
					/>
					{" with "}
					<InteractiveSelector
						options={[
							{
								label: "my name",
								value: "name",
							},
							{
								label: "my initials",
								value: "initials",
							},
							{
								label: "a quote",
								value: "initials",
							},
						]}
					/>
				</Heading>
				{actions && (
					<ActionStack
						color="secondary"
						actions={[
							{
								label: "Get Estimate",
								endIcon: <KeyboardArrowRight />,
							},
						]}
					/>
				)}
			</ContentGrid>
		</Block>
	</Container>
);
