import {Facebook, Instagram, Twitter} from '@mui/icons-material';
import {css, IconButton, Link, Stack, styled, Typography} from '@mui/material';
import {type FC} from 'react';
import {type Term} from '../../types/general';
import {Container} from '../molecules/Container';
import { Block } from '../molecules/Block';

export interface FooterBlockProps {
	title?: string;
	description?: string;
	meta?: Term[];
	copyrightText?: string;
	extraText?: string;
}

const Column = styled('div')(
	({theme}) => css`
		display: flex;
		flex-direction: column;
		gap: 2rem;

		${theme.breakpoints.up('md')} {
			gap: 0.75rem;
		}
	`
);

const FooterBlockWrapper = styled(Block)(
	({theme}) => css`
		${theme.utils.styles.block};

		border-bottom: solid 1px ${theme.palette.grey[300]};
	`
).withComponent('footer');

const Content = styled('div')(
	({theme}) => css`
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 1fr;

		${theme.breakpoints.up('md')} {
			grid-template-columns: repeat(3, 1fr);
		}
	`
);

const CopyrightBlockWrapper = styled(Block)(
	({theme}) => css`
		padding-block: 2rem !important;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;

		${theme.breakpoints.up('md')} {
			flex-direction: row;
			gap: 1.5rem;
		}
	`
);

export const FooterBlock: FC<FooterBlockProps> = ({title, description, meta = []}) => (
	<>
		<FooterBlockWrapper>
			<Container>
				<Content>
					<Column>
						<Typography variant='h3'>{title}</Typography>
						<Typography variant='body1'>{description}</Typography>
						<div>
							<Typography variant='subtitle1' color={'grey.700'}>
								{'Social Media'}
							</Typography>
							<Stack gap={'0.25rem'} direction={'row'}>
								<IconButton size='small'>
									<Facebook fontSize='small' />
								</IconButton>
								<IconButton size='small'>
									<Twitter fontSize='small' />
								</IconButton>
								<IconButton size='small'>
									<Instagram fontSize='small' />
								</IconButton>
							</Stack>
						</div>
					</Column>
					<Column>
						{meta?.map((term, termIndex) => (
							<div key={termIndex}>
								<Typography variant='subtitle1' color={'grey.700'}>
									{term.term}
								</Typography>
								<Typography>{term.description}</Typography>
							</div>
						))}
					</Column>
					<Column>
						<div>
							<Typography variant='subtitle1' color={'grey.700'}>
								{'Newsletter'}
							</Typography>
							<Typography>{'Input goes here'}</Typography>
						</div>
					</Column>
				</Content>
			</Container>
		</FooterBlockWrapper>
		<CopyrightBlockWrapper>
			<Container>
				<Typography variant='caption'>
					<Link>Privacy & Cookie Policy</Link>
				</Typography>
				<Typography variant='caption'>
					<Link>Terms of Service</Link>
				</Typography>
				<Typography variant='caption'>©Copyright 2015-2020, FashionGreek, USC.</Typography>
				<Typography variant='caption'>Made with ❤️ by Crealgo, LLC. All rights reserved.</Typography>
			</Container>
		</CopyrightBlockWrapper>
	</>
);
