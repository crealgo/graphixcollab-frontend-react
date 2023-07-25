import {css, styled} from '@mui/material/styles';
import {type FC, type ReactNode} from 'react';
import {type NavItemOptions} from '../../types/general';
import {generatePatternCSS} from '../../utils/generatePatternCSS';
import {Block, type BlockProps} from '../base/Block';
import {type BreadcrumbOptions} from '../base/Breadcrumbs';
import {Container} from '../base/Container';
import {Heading} from '../base/Heading';
import {type ImageProps} from '../base/Image';
import {Mark} from '../base/Mark';
import {Text} from '../base/Text';

export type PageHeaderBlockProps = {
	title?: ReactNode;
	description?: string;
	color?: 'cyan' | 'magenta' | 'yellow' | 'key';
	breadcrumbs?: BreadcrumbOptions[];
	navigationItems?: NavItemOptions[];
	navigationType?: 'scroll' | 'anchor-link';
	BlockProps?: BlockProps;
	ImageProps?: ImageProps;
};

const StyledWrapper = styled('div')<PageHeaderBlockProps>(({color = 'magenta'}) => css`
	&::after {
		content: '';
		background-color: blue;
		background-image: url(${generatePatternCSS(color)});
		display: flex;
		height: 5rem;
		width: 100%;
	}
`);

const Wrapper = styled(Block)<PageHeaderBlockProps>(({
	color = 'magenta',
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

		padding-bottom: var(--wrapper-padding-bottom);
		height: 100%;

		.PageHeaderBlock-container {
			position: relative;
		}

		.Heading-root,
		.Text-root {
			color: var(--color-brand-tertiary-darker);
		}
	`,
);

const HeaderImage = styled('img')`
	width: 100%;
	max-width: 40rem;
	display: block;
	margin-bottom: -12rem;
	padding: 3rem; // TODO: shouldn't be applied to all images

	@media screen and (min-width: 600px) {
		float: right;
	}

	@media screen and (min-width: 768px) {
		margin-top: -2.5rem;
	}

	@media screen and (min-width: 1027px) {
		margin-top: -5rem;
		margin-right: -2.5rem;
	}

	@media screen and (min-width: 1123px) {
		position: absolute;
		inset: 100% 0 auto auto;
		margin-top: -15rem;
		max-width: 35rem;
	}

	@media screen and (min-width: 1200px) {
		max-width: 40rem;
	}
`;

const Content = styled('hgroup')`
	max-width: 40rem;
`;

export const PageHeaderBlock: FC<PageHeaderBlockProps> = ({
	title, description, color, ImageProps,
}) => (
	<StyledWrapper color={color}>
		<Wrapper color={color}>
			<Container className='PageHeaderBlock-container'>
				<Content>
					<Heading hasMargin level={1}>
						<Mark brand>{title}</Mark>
					</Heading>
					<Text>{description}</Text>
				</Content>
				{ImageProps && <HeaderImage {...ImageProps}/>}
			</Container>
		</Wrapper>
	</StyledWrapper>
);

PageHeaderBlock.displayName = 'PageHeaderBlock';
