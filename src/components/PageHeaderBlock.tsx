import {type BlockProps} from '@components/Block';
import {Breadcrumbs, type BreadcrumbOptions} from '@components/Breadcrumbs';
import {Image, type ImageProps} from '@components/Image';
import {TopNav} from '@components/TopNav';
import {type NavItemOptions} from '@global/generalTypes';
import {Typography} from '@mui/material';
import {css, styled} from '@mui/material/styles';
import {forwardRef} from 'react';
import {Container} from './Container';

export interface PageHeaderBlockProps {
	title?: string;
	breadcrumbs?: BreadcrumbOptions[];
	navigationItems?: NavItemOptions[];
	navigationType: 'scroll' | 'anchor-link';
	BlockProps?: BlockProps;
	ImageProps?: ImageProps;
}

const Wrapper = styled('div')(({theme}) => ({
	paddingBlock: '2rem',
	backgroundColor: theme.palette.grey[200]
}));

const Content = styled(Container)(
	({theme}) => css`
		display: grid;
		grid-template-columns: 1fr auto;
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

export const PageHeaderBlock = forwardRef<HTMLDivElement, PageHeaderBlockProps>(
	({title, breadcrumbs, navigationItems, ImageProps, BlockProps}, ref) => (
		<>
			<Wrapper {...BlockProps} color='grey' ref={ref}>
				<Content>
					<TextContent className='PageHeader-textContent'>
						<Breadcrumbs items={breadcrumbs} />
						<Typography variant='h2' component={'h1'}>
							{title}
						</Typography>
					</TextContent>
					<TopNav align='end' items={navigationItems} />
				</Content>
			</Wrapper>
			{ImageProps && <Image {...ImageProps} height='10rem' width='cover' />}
		</>
	)
);

PageHeaderBlock.displayName = 'PageHeaderBlock';
