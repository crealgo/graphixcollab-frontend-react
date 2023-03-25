import { Image } from '@components/Image';
import { type ImageElementProps } from '@components/Image/ImageElement';
import { SocialMediaBlock, type SocialMediaBlockProps } from '@components/SocialMediaBlock';
import { StatusMessage } from '@components/StatusMessage';
import { type Action } from '@global/generalTypes';
import { Warning } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { css, styled } from '@mui/material/styles';
import clsx from 'clsx';
import { type ComponentPropsWithoutRef, type FC } from 'react';
import Marquee from 'react-fast-marquee';
import { Block } from './Block';
import { Container } from './Container';
import { ContentGrid } from './ContentGrid';
import { Heading } from './Heading';

export interface GalleryBlockProps extends ComponentPropsWithoutRef<'div'> {
	title?: string;
	description?: string;
	SocialMediaBlockProps?: SocialMediaBlockProps;
	images?: ImageElementProps[];
	actions?: Action[];
}

const Wrapper = styled(Block)(({ theme }) => css`
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
		width: 100%;
		overflow: hidden;
		margin-top: 2.5rem;

		.Image-root {
			margin-right: 0.25rem;
			width: 250px;

			cursor: pointer;

			&:hover {
				opacity: 0.875;
			}

			${theme.breakpoints.up('md')} {
				width: 300px;
			}
		}
	}
`)

export const GalleryBlock: FC<GalleryBlockProps> = ({ className, ...props }) => (
	<Wrapper className={clsx(className, 'GalleryBlock-root')}>
		<Container isContained>
			<div className='content'>
				<Heading level={2}>{props.title}</Heading>
				<Container isContained size='small'>
					<Typography variant='body2'>{props.description}</Typography>
				</Container>
				<SocialMediaBlock {...props.SocialMediaBlockProps} />
			</div>
			<div className='gallery'>
				{props.images?.length ? (
					<Marquee pauseOnHover>
						{props.images.map((imageProps, imageIndex) => (
							<Image ImageElementProps={imageProps} className='GalleryBlock-image' key={imageIndex} />
						))}
					</Marquee>
				) : (
					<StatusMessage contained IconComponent={Warning} text='No Images Available' />
				)}
			</div>
		</Container>
	</Wrapper>
);
