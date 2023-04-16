import {type RatingProps as MuiRatingProps} from '@mui/material/Rating';
import {type FC} from 'react';

export type RatingProps = {
	max?: number;
} & Pick<MuiRatingProps, 'value' | 'title' | 'className'>;

export const Rating: FC<RatingProps> = props => <Rating {...props}/>;
