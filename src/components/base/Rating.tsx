import {type RatingProps as MuiRatingProps} from '@mui/material/Rating';
import {type FC} from 'react';

export interface RatingProps extends Pick<MuiRatingProps, 'value' | 'title' | 'className'> {
	max?: number;
}

export const Rating: FC<RatingProps> = (props) => <Rating {...props} />;
