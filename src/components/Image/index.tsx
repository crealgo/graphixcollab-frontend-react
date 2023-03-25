import {ErrorState} from './ErrorState';
import {ImageElement, type ImageElementProps} from './ImageElement';
import {ImageWrapper, type ImageWrapperProps} from './ImageWrapper';
import {LoadingState} from './LoadingState';
import {type LoadingStatus} from '@global/generalTypes';
import clsx from 'clsx';
import {useMemo, useState, type ComponentPropsWithoutRef, type FC} from 'react';

export interface ImageProps
	extends ImageWrapperProps,
		ComponentPropsWithoutRef<'div'>,
		Pick<ImageElementProps, 'alt' | 'src'> {
	ImageElementProps?: ImageElementProps;
	frame?: 'squared' | 'rounded' | 'circular';
}

export const Image: FC<ImageProps> = ({
	className,
	ImageElementProps: userImageProps = {},
	src,
	alt,
	height,
	width = '100%',
	frame = 'squared'
}) => {
	const [status, setStatus] = useState<LoadingStatus>('loading');

	const {onLoad, onError, className: imageClassName, ...ImageElementProps} = userImageProps;

	const handleLoad = () => {
		setStatus('loaded');
	};

	const handleError = () => {
		setStatus('error');
	};

	const renderedStatus = useMemo(() => {
		if (status === 'error') {
			return <ErrorState fontSize={'small'} />;
		}

		if (status === 'loading') {
			return <LoadingState />;
		}

		return null;
	}, [status]);

	return (
		<ImageWrapper height={height} width={width} className={clsx('Image-root', className)} frame={frame}>
			{/* {renderedStatus} */}
			{status}
			<ImageElement
				src={src}
				alt={alt}
				{...ImageElementProps}
				className={clsx(imageClassName, 'Image-imageElement')}
				// onLoad={handleLoad}
				// onError={handleError}
				loaded={status === 'loaded'}
			/>
		</ImageWrapper>
	);
};
