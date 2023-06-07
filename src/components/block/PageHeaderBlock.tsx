import { css, styled } from '@mui/material/styles';
import { type FC, type ReactNode } from 'react';
import { type NavItemOptions } from '../../types/general';
import { Block, type BlockProps } from '../base/Block';
import { type BreadcrumbOptions } from '../base/Breadcrumbs';
import { Container } from '../base/Container';
import { Heading } from '../base/Heading';
import { type ImageProps } from '../base/Image';
import { Text } from '../base/Text';
import { type ColorVariants } from '../../types/color';
import { Mark } from '../base/Mark';

export type PageHeaderBlockProps = {
	title?: ReactNode;
	description?: string;
	color?: Extract<ColorVariants, 'primary' | 'secondary' | 'tertiary'>;
	breadcrumbs?: BreadcrumbOptions[];
	navigationItems?: NavItemOptions[];
	navigationType?: 'scroll' | 'anchor-link';
	BlockProps?: BlockProps;
	ImageProps?: ImageProps;
};

const Wrapper = styled(Block)<Pick<PageHeaderBlockProps, 'color'>>(
	({ color = 'tertiary' }) => css`
		--wrapper-padding-bottom: 6rem;

		@media screen and (min-width: 1123px) {
			--wrapper-padding-bottom: 5rem;
		}

		background-color: var(--color-brand-${color}-lighter);
		margin-top: calc(5rem - 10rem);

		padding-bottom: var(--wrapper-padding-bottom);

		.PageHeaderBlock-container {
			position: relative;
		}

		.Heading-root,
		.Text-root {
			color: var(--color-brand-tertiary-darker);
		}
	`
);

const HeaderImage = styled('img')`
	/* background-color: rgba(0, 0, 0, 0.1); */

	width: 100%;
	max-width: 40rem;
	display: block;
	margin-bottom: -12rem;

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
	title,
	description,
	color,
	ImageProps
}) => (
	<Wrapper color={color}>
		<Container className="PageHeaderBlock-container">
			<Content>
				<Heading hasMargin level={1}>
					<Mark brand>{title}</Mark>
				</Heading>
				<Text>{description}</Text>
			</Content>
			{ImageProps && <HeaderImage {...ImageProps} />}
		</Container>
	</Wrapper>
);

PageHeaderBlock.displayName = 'PageHeaderBlock';
