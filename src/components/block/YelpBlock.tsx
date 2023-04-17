import Typography from '@mui/material/Typography';
import {type FC} from 'react';
import {Block} from '../base/Block';
import {Container} from '../base/Container';
import styled from '@emotion/styled';

export type PlaceholderBlockProps = {
	quote?: string;
};

const Testimonial = styled('div')`
	display: flex;
	align-items: center;
	gap: var(--testimonial-container-gap);
`;

export const YelpBlock: FC<PlaceholderBlockProps> = ({quote}) => (
	<Container>
		<Block rounded color='grey'>
			<Testimonial>
				<img className='image' src='' alt=''/>
				<div className='content'>
					<q>{quote}</q>
					<div className='rating'/>
				</div>
			</Testimonial>
		</Block>
	</Container>
);
