import {type FC} from 'react';
import {Block} from '@components/Block';
import Typography from '@mui/material/Typography';
import {css, styled} from '@mui/material/styles';

export interface PlaceholderBlockProps {
	name?: string;
}

const Wrapper = styled(Block)(
	({theme}) => css`
		background-color: ${theme.palette.grey[300]};
	`
);

export const PlaceholderBlock: FC<PlaceholderBlockProps> = ({name}) => (
	<Wrapper color='grey'>
		<Typography variant='h2' textAlign={'center'}>
			{name && `${name} Placeholder`}
		</Typography>
	</Wrapper>
);
