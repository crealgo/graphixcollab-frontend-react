import { ActionStack } from "./ActionStack";
import { Heading } from "./Heading";
import { type SharedBlockProps } from "../../types/general";
import Typography from "@mui/material/Typography";
import { type FC } from "react";
import { Container } from "./Container";

interface BlockHeaderProps extends SharedBlockProps {
	disablePadding?: boolean;
	component?: keyof JSX.IntrinsicElements;
}

export const BlockHeader: FC<BlockHeaderProps> = ({ title, subtitle, description, actions }) => (
	<hgroup>
		{subtitle && <Typography variant="overline">{subtitle}</Typography>}
		{title && <Heading level={1}>{title}</Heading>}
		{description && (
			<Container size="small">
				<Typography variant="body2">{description}</Typography>
			</Container>
		)}
		{actions && <ActionStack color="secondary" actions={actions} />}
	</hgroup>
);
