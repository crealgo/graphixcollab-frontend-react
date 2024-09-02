import {useMediaQuery, type Theme} from '@mui/material';
import {css, styled} from '@mui/material/styles';
import clsx from 'clsx';
import {type FC} from 'react';
import Marquee from 'react-fast-marquee';
import {type Action} from '@graphixcollab/types/general';
import {Block} from './Block';
import {Container} from './Container';
import {Heading} from './Heading';
import {Image, type ImageProps} from './Image';
import {Text} from './Text';
import {
	SocialMediaBlock,
	type SocialMediaBlockProps,
} from './SocialMediaBlock';

export type GalleryBlockProps = {
	readonly title?: string;
	readonly description?: string;
	readonly SocialMediaBlockProps?: SocialMediaBlockProps;
	readonly images?: ImageProps[];
	readonly actions?: Action[];
	readonly className?: string;
};

const Wrapper = styled(Block)(
	({theme}) => css`
		/* padding-inline: 0rem; */

		.Container-root {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.content {
			text-align: center;
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.gallery {
			overflow: hidden;
			margin-top: 2.5rem;
			margin-inline: -1.5rem;
			display: grid;
			gap: 0.5rem;

			.GalleryBlock-image {
				margin-inline: 0.25rem;
				width: 10rem;
			}
			${theme.breakpoints.up('md')} {
				margin-inline: 0;

				.GalleryBlock-image {
					width: 13rem;
				}
			}
		}
	`,
);

export const GalleryBlock: FC<GalleryBlockProps> = ({
	className,
	title,
	description,
	SocialMediaBlockProps,
	images = [],
}) => {
	const count = 7;

	const firstStack = images.slice(0, count);
	const secondStack = images.slice(count, count * 2);

	const isDesktop = useMediaQuery<Theme>(theme => theme.breakpoints.up('md'));

	return (
		<Wrapper isClipped className={clsx(className, 'GalleryBlock-root')}>
			<Container className='GalleryBlock-container'>
				<div className='content'>
					<Heading level={2}>{title}</Heading>
					<Container size='small'>
						<Text size='large'>{description}</Text>
					</Container>
					<SocialMediaBlock {...SocialMediaBlockProps}/>
				</div>
				<div className='gallery'>
					{firstStack?.length && (
						<Marquee gradient={isDesktop}>
							{firstStack.map((imageProps, imageIndex) => (
								<Image
									key={imageIndex}
									shape='square'
									className='GalleryBlock-image'
									fill='cover'
									{...imageProps}
								/>
							))}
						</Marquee>
					)}
					{secondStack?.length && (
						<Marquee gradient={isDesktop} direction='right'>
							{secondStack.map((imageProps, imageIndex) => (
								<Image
									key={imageIndex}
									shape='square'
									className='GalleryBlock-image'
									fill='cover'
									{...imageProps}
								/>
							))}
						</Marquee>
					)}
				</div>
			</Container>
		</Wrapper>
	);
};
