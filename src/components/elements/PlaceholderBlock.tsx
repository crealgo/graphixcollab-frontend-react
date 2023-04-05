import { type FC } from "react";
import { Block } from "@components/Block";
import Typography from "@mui/material/Typography";
import { css, styled } from "@mui/material/styles";
import { Container } from "./Container";

export interface PlaceholderBlockProps {
	name?: string;
}

export const PlaceholderBlock: FC<PlaceholderBlockProps> = ({ name }) => (
	<Container>
		<Block rounded color="grey">
			<Typography variant="h2" textAlign={"center"}>
				{name && `${name} Placeholder`}
			</Typography>
		</Block>
	</Container>
);
