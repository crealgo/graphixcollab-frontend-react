import {css, styled} from '@mui/material/styles';
import {type FC, type ReactNode} from 'react';
import {generatePatternBackground} from '@graphixcollab/utils/generatePatternBackground.tsx';
import {Block} from './Block';
import {Container} from './Container';
import {Heading} from './Heading';
import {Image, type ImageProps} from './Image';
import {Mark} from './Mark';
import {Text} from './Text';

export type PageHeaderBlockProps = {
	readonly title?: ReactNode;
	readonly description?: string;
	readonly color?: 'cyan' | 'magenta' | 'yellow' | 'key';
	readonly ImageProps?: ImageProps;
};

const DividerPattern = styled('div')<PageHeaderBlockProps>(({color = 'magenta'}) => css`
	content: '';
	position: relative;
	z-index: -1;
	background-image: ${generatePatternBackground(color, '0.5')};
	display: flex;
	height: 5rem;
	width: 100%;
`);

const Wrapper = styled(Block)<Pick<PageHeaderBlockProps, 'color'>>(({color = 'magenta'}) => css`
	--wrapper-padding-bottom: 6rem;

	@media screen and (min-width: 1123px) {
		--wrapper-padding-bottom: 5rem;
	}

	background-color: var(--color-brand-${color}-lightest);
	border: none !important;

	.Heading-root, .Text-root {
		color: var(--color-brand-tertiary-darker);
	}
`);

const StyledContainer = styled(Container)(({theme}) => css`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	column-gap: 2rem;

	.content, .image {
		position: relative;
	}

	.image {
		margin-bottom: -7rem;
	}

	${theme.breakpoints.up('md')} {
		grid-template-columns: 35rem 1fr;

		.image {
			margin-bottom: unset;
		}
	}
`);

const HeaderImage = styled(Image)(({theme}) => css`
	width: 100%;
	height: 100%;

	${theme.breakpoints.up('md')} {
		position: absolute;
	}
`);

export const PageHeaderBlock: FC<PageHeaderBlockProps> = ({
	title, description, color, ImageProps,
}) => (
	<>
		<Wrapper color={color}>
			<StyledContainer>
				<hgroup className='content'>
					<Heading hasMargin level={1}>
						<Mark brand>{title}</Mark>
					</Heading>
					<Text>{description}</Text>
				</hgroup>
				<div className='image'>{ImageProps && (
					<HeaderImage
						{...ImageProps}
						height='auto'
						width='100%'
						fill='contain'
						shape='auto'
					/>
				)}
				</div>
			</StyledContainer>
		</Wrapper>
		<DividerPattern role='separator' color={color}/>
	</>
);

PageHeaderBlock.displayName = 'PageHeaderBlock';
