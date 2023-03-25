import {ArrowForward} from '@mui/icons-material';
import {Button, css, Divider, Stack, styled, Typography} from '@mui/material';
import clsx from 'clsx';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {type Article} from '@global/generalTypes';
import {Profile} from '@components/Profile';

export interface NewsCardsProps extends ComponentPropsWithoutRef<'div'> {
	article: Article;
}

const NewsCardWrapper = styled('div')(
	({theme}) => css`
		${theme.utils.styles.card.outlined}

		max-width: 20rem;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		justify-content: start;

		.NewsCard-actions {
			display: flex;
		}
	`
);

export const NewsCard: FC<NewsCardsProps> = ({className, article}) => (
	<NewsCardWrapper className={clsx(className, 'NewsCard-root')}>
		<Profile profile={article.author} />
		{Array.isArray(article.tags) && (
			<Stack
				direction={'row'}
				spacing={1}
				divider={<Divider orientation='vertical' flexItem />}
				className='NewsCard-meta'
			>
				{article.tags.map((tag, tagIndex) => (
					<Typography key={tagIndex} variant='body2' className='NewsCard-metaItem'>
						{tag}
					</Typography>
				))}
			</Stack>
		)}
		<Typography variant='h4' color='text.secondary'>
			{article.title}
		</Typography>
		<div className='NewsCard-actions'>
			{article.url && (
				<Button href={article.url} endIcon={<ArrowForward />}>
					{'Read More'}
				</Button>
			)}
		</div>
	</NewsCardWrapper>
);
