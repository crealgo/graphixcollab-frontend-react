import {css, styled} from '@mui/material/styles';
import {type FC, type ReactNode} from 'react';
import {generatePatternCSS} from '../../utils/generatePatternCSS';
import {Block} from '../base/Block';
import {Container} from '../base/Container';
import {Heading} from '../base/Heading';
import {Image, type ImageProps} from '../base/Image';
import {Mark} from '../base/Mark';
import {Text} from '../base/Text';

export type PageHeaderBlockProps = {
	title?: ReactNode;
	description?: string;
	color?: 'cyan' | 'magenta' | 'yellow' | 'key';
	ImageProps?: ImageProps;
};

const DividerPattern = styled('div')<PageHeaderBlockProps>(({color = 'magenta'}) => css`
	content: '';
	background-color: blue;
	background-image: url(${generatePatternCSS(color)});
	display: flex;
	height: 5rem;
	width: 100%;
`);

const Wrapper = styled(Block)<PageHeaderBlockProps>(({
	color = 'magenta', ImageProps,
}) => css`
	--wrapper-padding-bottom: 6rem;

	@media screen and (min-width: 1123px) {
		--wrapper-padding-bottom: 5rem;
	}

	background-color: var(--color-brand-${color}-lightest);
	margin-top: calc(5rem - 10rem);
	border-top: unset;
	border-right: unset;
	border-left: unset;

	padding-bottom: ${ImageProps?.src ? '0 !important' : 'var(--wrapper-padding-bottom)'};
	/* height: 100%; */

	.PageHeaderBlock-container {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.Heading-root,
	.Text-root {
		color: var(--color-brand-tertiary-darker);
	}
`);

const HeaderImage = styled(Image)`
	width: 100%;
	display: block;
	transform: scale(1.125);

	@media screen and (min-width: 425px) {
		max-width: 25rem;
		inset: 100% 0 auto auto;
		max-width: 35rem;
	}
`;

const Content = styled('hgroup')`
	max-width: 40rem;
`;

export const PageHeaderBlock: FC<PageHeaderBlockProps> = ({
	title, description, color, ImageProps,
}) => (
	<>
		<Wrapper color={color} ImageProps={ImageProps}>
			<Container className='PageHeaderBlock-container'>
				<Content>
					<Heading hasMargin level={1}>
						<Mark brand>{title}</Mark>
					</Heading>
					<Text>{description}</Text>
				</Content>
				{ImageProps && <HeaderImage {...ImageProps} fill='contain' shape='auto'/>}
			</Container>
		</Wrapper>
		<DividerPattern role='separator' color={color}/>
	</>
);

PageHeaderBlock.displayName = 'PageHeaderBlock';
