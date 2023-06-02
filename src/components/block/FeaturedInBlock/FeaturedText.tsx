import { Typography } from '@mui/material';
import { type FC } from 'react';
import { type FeaturedCompanyInfo } from '../../../content/featured-companies';

export const FeaturedText: FC<FeaturedCompanyInfo> = props => (
	<Typography
		marginX="2rem"
		variant="h3"
		color="grey.500"
		sx={{
			'cursor': 'pointer',
			'&:hover': {
				color: 'grey.700'
			},
			...props.styleOverrides
		}}
	>
		{props.name}
	</Typography>
);
