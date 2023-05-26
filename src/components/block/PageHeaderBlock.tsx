import {css, styled} from '@mui/material/styles';
import {type FC, type ReactNode} from 'react';
import {type NavItemOptions} from '../../types/general';
import {Block, type BlockProps} from '../base/Block';
import {Breadcrumbs, type BreadcrumbOptions} from '../base/Breadcrumbs';
import {Container} from '../base/Container';
import {Heading} from '../base/Heading';
import {Image, type ImageProps} from '../base/Image';
import {Text} from '../base/Text';

export type PageHeaderBlockProps = {
	title?: ReactNode;
	description?: string;
	color?: string;
	breadcrumbs?: BreadcrumbOptions[];
	navigationItems?: NavItemOptions[];
	navigationType?: 'scroll' | 'anchor-link';
	BlockProps?: BlockProps;
	ImageProps?: ImageProps;
};

const Wrapper = styled(Block)<{
	color?: string;
}>(
	({theme, color}) => css`
		background-color: var(--color-brand-tertiary-light);
		padding-top: 10rem !important;
		margin-left: 0 !important;
		margin-right: 0 !important;
		margin-top: calc(5rem - 10rem);

		.image {
			img {
				width: 100%;
				object-position: center center;
				height: 100%;
				object-fit: contain;
			}

			position: relative;
			height: auto;
			width: 100%;
			right: 0;
			margin-top: 2rem;
			margin-bottom: -8rem;

			${theme.breakpoints.up('lg')} {
				margin-top: 0;
				margin-bottom: 0;

				position: absolute;
				height: 40rem;
				width: 40rem;
				left: 55%;
				top: 20%;
			}
		}

		.Heading-root,
		.Text-root {
			color: var(--color-brand-tertiary-dark);
		}
	`
);

const Content = styled('div')(
	({theme}) => css`
		display: grid;
		grid-template-columns: minmax(auto, 40rem);
		gap: 2rem;

		.TopNav-root {
			display: none;

			${theme.breakpoints.up('md')} {
				display: flex;
			}
		}
	`
);

const TextContent = styled('div')`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.25rem;
`;

export const PageHeaderBlock: FC<PageHeaderBlockProps> = ({
	title,
	breadcrumbs,
	description,
	ImageProps
}) => (
	<Wrapper>
		<Container>
			<Content>
				<TextContent className="PageHeader-textContent">
					<Breadcrumbs items={breadcrumbs} />
					<Heading gutterBottom level={1}>
						{title}
					</Heading>
					<Text>{description}</Text>
				</TextContent>
			</Content>
			<div className="image">
				<img {...ImageProps} />
			</div>
		</Container>
	</Wrapper>
);

PageHeaderBlock.displayName = 'PageHeaderBlock';
