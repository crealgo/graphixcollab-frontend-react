import {styled} from '@mui/material';
import {type FC} from 'react';
import {QuickEstimateForm} from '../../forms/QuickEstimateForm';
import {Block} from '../base/Block';
import {Container} from '../base/Container';

const AdornmentImage = styled('img')`
	--adornment-image-position: absolute;
	--adornment-image-z-index: 0;

	--adornment-image-width: 100%;
	--adornment-image-max-width: 100%;
	--adornment-image-inset: auto -1rem 0 auto;

	@media screen and (min-width: 768px) {
		--adornment-image-max-width: 36rem;
		--adornment-image-inset: auto -10rem -2rem auto;
	}

	max-width: var(--adornment-image-max-width);
	width: var(--adornment-image-width);
	height: auto;

	position: var(--adornment-image-position);
	inset: var(--adornment-image-inset);

	z-index: var(--adornment-image-z-index);
`;

export const EstimatorBlock: FC = () => (
	<Container>
		<Block isClipped isRounded color='grey' className='EstimatorBlock-root'>
			<QuickEstimateForm/>
			<AdornmentImage
				src='assets/juicy-business-coach-explains-the-material-min@512w.webp'
				alt='Explaining the material'
			/>
		</Block>
	</Container>
);
