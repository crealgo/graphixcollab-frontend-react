import {css, styled, Typography} from '@mui/material';
import {type FC} from 'react';
import {type SharedBlockProps} from '@graphixcollab/types/general';
import {ActionStack} from './ActionStack';
import {ImageCarousel} from './ImageCarousel';

export type FanServiceBlockProps = {
	readonly images?: string[];
} & SharedBlockProps;

const FanServiceBlockWrapper = styled('div')(
	({theme}) => css`
		display: grid;
		grid-template-columns: 1fr;

		.ImageCarousel-root {
			background-color: var(--color-brand-key-lightest);
			min-height: 300px;
		}

		.FanServiceBlock-content {
			.FanServiceBlock-intro,
			.FanServiceBlock-cta {
				padding: 1.5rem 1rem;
			}

			.FanServiceBlock-intro {
				max-width: 30rem;
			}

			.FanServiceBlock-cta {
				background-color: var(--color-brand-key-lightest);
			}
		}

		${theme.breakpoints.up('md')} {
			grid-template-columns: 1fr 1fr;

			.ImageCarousel-root {
				background-color: var(--color-brand-key-lightest);
			}

			.FanServiceBlock-content {
				.FanServiceBlock-intro,
				.FanServiceBlock-cta {
					padding: 2.5rem;
				}
			}
		}
	`,
);

export const FanServiceBlock: FC<FanServiceBlockProps> = props => (
	<FanServiceBlockWrapper>
		{props.images?.length ? <ImageCarousel images={props.images}/> : null}
		<div className='FanServiceBlock-content'>
			<div className='FanServiceBlock-intro'>
				<Typography gutterBottom variant='h3'>
					{props.title}
				</Typography>
				<Typography variant='body1' marginTop='0.25rem'>
					{props.description}
				</Typography>
			</div>
			<div className='FanServiceBlock-cta'>
				<ActionStack
					color='secondary'
					{...props.ActionStackProps}
					actions={props.actions}
				/>
			</div>
		</div>
	</FanServiceBlockWrapper>
);
