import Typography from '@mui/material/Typography';
import { type FC } from 'react';
import { Block } from '../base/Block';
import { Container } from '../base/Container';

export type PlaceholderBlockProps = {
	name?: string;
};

export const PlaceholderBlock: FC<PlaceholderBlockProps> = ({ name }) => (
	<Container>
		<Block isRounded color="grey">
			<Typography variant="h2" textAlign="center">
				{name && `${name} Placeholder`}
			</Typography>
		</Block>
	</Container>
);
