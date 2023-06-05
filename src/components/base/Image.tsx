import { css, styled } from '@mui/material';
import clsx from 'clsx';
import { type ComponentPropsWithRef, type FC, type ReactNode } from 'react';

export type ImageProps = ComponentPropsWithRef<'img'> & {
	caption?: ReactNode;
	shape?: 'square' | 'portrait' | 'landscape';
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
				className="Image-element"
				onLoad={onLoad}
				onError={onError}
				{...props}
			/>
			{caption && (
				<figcaption className="Image-caption">{caption}</figcaption>
			)}
		</figure>
	);
};

export const Image = styled(BaseElement)(({ theme, shape }) => {
	const shapeCss = {
		square: css`
			aspect-ratio: 1;
		`,
		portrait: css``,
		landscape: css``
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

		background-color: var(--color-gray-200);

		/* FIXME: doesn't work well with caption, needs wrapper around image */
		${shapeCss}

		.Image-element {
			outline: unset;
			object-fit: cover;
			width: 100%;
			height: 100%;
			border-radius: 0.25rem;
			aspect-ratio: 1;
		}

		&[loaded] {
		}
	`;
});
