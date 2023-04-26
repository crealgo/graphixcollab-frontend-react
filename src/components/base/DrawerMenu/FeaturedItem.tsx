import {Image, type ImageProps} from '../Image';
import {css, styled} from '@mui/material';
import {type FC} from 'react';

export type FeaturedItemProps = {
	label?: string;
	ImageProps?: ImageProps;
};

const FeaturedItemWrapper = styled('div')(
	({theme}) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;

		&:hover {
			.Title-root {
				color: ${theme.palette.grey[800]};
			}

			.Image-root {
				background-color: ${theme.palette.grey[400]};
				outline: dashed 2px ${theme.palette.grey[400]};
				outline-offset: 2px;
			}
		}
	`
);

const FeaturedItemImage = styled(Image)(
	({theme}) => css`
		background-color: ${theme.palette.grey[300]};
		width: 100%;
		aspect-ratio: 1;
	`
);

const Title = styled('span')(
	({theme}) => css`
		font-size: 0.75rem;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;

		color: ${theme.palette.grey[600]};
	`
);

export const FeaturedItem: FC<FeaturedItemProps> = ({ImageProps, label}) => (
	<FeaturedItemWrapper>
		<FeaturedItemImage {...ImageProps} />
		<Title className="Title-root">{label}</Title>
	</FeaturedItemWrapper>
);
