import {css, styled, Typography} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {type Action, type Article} from '@global/generalTypes';
import {ActionStack} from '@components/ActionStack';
import {NewsCard} from '@components/NewsCard';

/** START PLAYGROUND */

export interface NewsBlockWrapperProps extends ComponentPropsWithoutRef<'div'> {
	meta?: string;
	title?: string;
	actions: Action[];
	articles: Article[];
}

export const NewsBlockWrapper = styled('div')(
	({theme}) => css`
		${theme.utils.styles.block}

		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		.NewsCard-root {
			max-width: 100%;
		}

		${theme.breakpoints.up('sm')} {
			grid-template-columns: repeat(2, 1fr);
		}

		${theme.breakpoints.up('md')} {
			grid-template-columns: repeat(4, 1fr);
		}
	`
);

const NewsBlockContent = styled('div')(
	({theme}) => css`
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: ${theme.spacing(2)};
	`
);

export const NewsBlock: FC<NewsBlockWrapperProps> = ({articles, meta, title, actions}) => (
	<NewsBlockWrapper className='NewsBlock-root'>
		<NewsBlockContent>
			<Typography variant='h2' className='NewsBlock-contentMeta'>
				{meta}
			</Typography>
			<Typography variant='body1' className='NewsBlock-contentTitle'>
				{title}
			</Typography>
			<ActionStack actions={actions} />
		</NewsBlockContent>
		{articles?.map((article, articleIndex) => (
			<NewsCard key={articleIndex} article={article} />
		))}
	</NewsBlockWrapper>
);
