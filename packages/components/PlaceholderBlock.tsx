import Typography from '@mui/material/Typography';
import {type FC} from 'react';
import {Block} from './Block';
import {Container} from './Container';

export type PlaceholderBlockProps = {
	readonly name?: string;
};

export const PlaceholderBlock: FC<PlaceholderBlockProps> = ({name}) => (
	<Container>
		<Block isRounded color='grey'>
			<Typography variant='h2' textAlign='center'>
				{name && `${name} Placeholder`}
			</Typography>
		</Block>
	</Container>
);
