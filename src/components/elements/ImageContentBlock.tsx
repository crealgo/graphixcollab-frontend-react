import { ActionStack } from '../molecules/ActionStack';
import { Block } from '../molecules/Block';
import { Image, type ImageProps } from '../molecules/Image';
import { Text } from '../molecules/Text';
import { type SharedBlockProps } from '../../types/general';
import { css, styled, Typography } from '@mui/material';
import { type FC } from 'react';
import { Container } from '../molecules/Container';
import { ContentGrid } from '../molecules/ContentGrid';

export interface ImageContentBlockProps extends SharedBlockProps {
	imagePosition?: 'start' | 'end';
	ImageProps?: ImageProps;
}

const InnerWrapper = styled(Container)<ImageContentBlockProps>(
	({theme}) => css`
		position: relative;

		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		align-items: center;

		${theme.breakpoints.up('md')} {
			gap: 4rem;
			grid-template-columns: 1fr 1fr;
		}
	`
);

export const ImageContentBlock: FC<ImageContentBlockProps> = ({
	ImageProps,
	title,
	subtitle,
	description,
	actions,
	imagePosition,
	ActionStackProps
}) => (
	<Block>
		<InnerWrapper isContained>
			{imagePosition !== 'end' && <Image {...ImageProps} />}
			<ContentGrid size='small'>
				<Typography variant='overline' marginBottom={-3}>
					{subtitle}
				</Typography>
				<Typography variant='h3'>{title}</Typography>
				<Text>{description}</Text>
				<ActionStack color='primary' size='large' {...ActionStackProps} actions={actions} />
			</ContentGrid>
			{imagePosition === 'end' && <Image {...ImageProps} />}
		</InnerWrapper>
	</Block>
);
