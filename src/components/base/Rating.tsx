import MuiRating, {
	type RatingProps as MuiRatingProps
} from '@mui/material/Rating';
import { type FC } from 'react';

export type RatingProps = {
	max?: number;
} & MuiRatingProps;

export const Rating: FC<RatingProps> = props => <MuiRating {...props} />;
