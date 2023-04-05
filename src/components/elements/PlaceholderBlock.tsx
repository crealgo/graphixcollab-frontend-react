import Typography from "@mui/material/Typography";
import { type FC } from "react";
import { Block } from "../molecules/Block";
import { Container } from "../molecules/Container";

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
