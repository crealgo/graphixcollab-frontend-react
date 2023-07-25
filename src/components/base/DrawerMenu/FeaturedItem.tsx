import {styled} from '@mui/material';
import {type FC} from 'react';
import {Image, type ImageProps} from '../Image';

export type FeaturedItemProps = {
	label?: string;
	ImageProps?: ImageProps;
};

const FeaturedItemWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;

	&:hover {
		.Title-root {
			color: var(--color-brand-key-darker);
		}

		.Image-root {
			background-color: var(--color-brand-key-lighter);
			outline: dashed 2px var(--color-brand-key-lighter);
			outline-offset: 2px;
		}
	}
`;

const FeaturedItemImage = styled(Image)`
	background-color: var(--color-brand-key-lighter);
	width: 100%;
	aspect-ratio: 1;
`;

const Title = styled('span')`
	font-size: 0.75rem;
	text-align: center;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	color: var(--color-brand-key-dark);
`;

export const FeaturedItem: FC<FeaturedItemProps> = ({ImageProps, label}) => (
	<FeaturedItemWrapper>
		<FeaturedItemImage {...ImageProps}/>
		<Title className='Title-root'>{label}</Title>
	</FeaturedItemWrapper>
);
