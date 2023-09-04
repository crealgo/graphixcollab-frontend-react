import {css, styled} from '@mui/material/styles';
import {type FC, type ReactNode} from 'react';
import {generatePatternBackground} from '../../utils/generatePatternBackground';
import {Block} from '../base/Block';
import {Container} from '../base/Container';
import {Heading} from '../base/Heading';
import {Image, type ImageProps} from '../base/Image';
import {Mark} from '../base/Mark';
import {Text} from '../base/Text';

export type PageHeaderBlockProps = {
	readonly title?: ReactNode;
	readonly description?: string;
	readonly color?: 'cyan' | 'magenta' | 'yellow' | 'key';
	readonly ImageProps?: ImageProps;
};

const DividerPattern = styled('div')<PageHeaderBlockProps>(({color = 'magenta'}) => css`
	content: '';
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
	border-top: none !important;
	border-right: none !important;
	border-left: none !important;

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
