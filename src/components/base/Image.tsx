import {css, styled} from '@mui/material';
import clsx from 'clsx';
import {type ComponentPropsWithRef, type FC, type ReactNode} from 'react';

export type ImageProps = ComponentPropsWithRef<'img'> & {
	fill?: 'cover' | 'contain';
	caption?: ReactNode;
	shape?: 'square' | 'portrait' | 'landscape' | 'auto';
};

const BaseElement: FC<ImageProps> = ({
	className,
	onLoad: userOnLoad,
	onError: userOnError,
	caption,
	...props
}) => {
	const onLoad: ImageProps['onLoad'] = event => {
		console.log('loaded');

		userOnLoad?.(event);
	};

	const onError: ImageProps['onError'] = event => {
		console.log('loaded');

		userOnError?.(event);
	};

	return (
		<figure className={clsx('Image-root', className)}>
			<img
				className='Image-element'
				onLoad={onLoad}
				onError={onError}
				{...props}
			/>
			{caption && (
				<figcaption className='Image-caption'>{caption}</figcaption>
			)}
		</figure>
	);
};

export const Image = styled(BaseElement)(({
	shape = 'auto', fill = 'cover',
}) => {
	const aspectRatio = {
		square: '1 / 1',
		portrait: '3 / 4',
		landscape: '4 / 3',
		auto: 'auto',
	}[shape ?? 'square'];

	return css`
		margin: unset;
		padding: unset;
		border: unset;
		outline: unset;

		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;

		.Image-element {
			outline: unset;

			display: flex;
			object-fit: ${fill};
			width: 100%;
			height: 100%;
			border-radius: 0.25rem;
			aspect-ratio: ${aspectRatio};
		}

		&[loaded] {
		}
	`;
});
