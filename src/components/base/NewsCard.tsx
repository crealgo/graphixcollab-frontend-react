import {ArrowForward} from '@mui/icons-material';
import {Button, Divider, Stack, styled, Typography} from '@mui/material';
import clsx from 'clsx';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {type Article} from '../../types/general';
import {Profile} from './Profile';

export type NewsCardsProps = {
	readonly article: Article;
} & ComponentPropsWithoutRef<'div'>;

const NewsCardWrapper = styled('div')`
	max-width: 20rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	justify-content: start;

	.NewsCard-actions {
		display: flex;
	}
`;

export const NewsCard: FC<NewsCardsProps> = ({className, article}) => (
	<NewsCardWrapper className={clsx(className, 'NewsCard-root')}>
		<Profile profile={article.author}/>
		{Array.isArray(article.tags) && (
			<Stack
				direction='row'
				spacing={1}
				divider={<Divider flexItem orientation='vertical'/>}
				className='NewsCard-meta'
			>
				{article.tags.map((tag, tagIndex) => (
					<Typography
						key={tagIndex}
						variant='body2'
						className='NewsCard-metaItem'
					>
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
				<Button href={article.url} endIcon={<ArrowForward/>}>
					Read More
				</Button>
			)}
		</div>
	</NewsCardWrapper>
);
