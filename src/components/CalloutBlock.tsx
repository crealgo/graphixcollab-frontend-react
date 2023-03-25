import { ActionStack } from '@components/ActionStack';
import { Container } from '@components/Container';
import { DualPhoneDisplay } from '@components/DualPhoneDisplay';
import { type Action } from '@global/generalTypes';
import { css, styled, Typography } from '@mui/material';
import { type FC } from 'react';

export interface CalloutBlockProps {
	title?: string;
	description?: string;
	meta?: string;
	actions?: Action[];
}

const OuterWrapper = styled('div')(
	({theme}) => `
    ${theme.breakpoints.up('md')} {
		margin: 1rem;
    }
`
);

const InnerWrapper = styled('div')(
	({theme}) => css`
		position: relative;
		background-color: ${theme.palette.secondary.light};
		display: grid;
		grid-template-columns: 1fr;

		border-radius: 0.5rem;
		overflow: hidden;

		${theme.breakpoints.up('sm')} {
			padding-bottom: 0;
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
	`
);

const Content = styled('div')(
	({theme}) => css`
		${theme.utils.styles.block};
		background-color: transparent;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		z-index: 1;

		.CalloutBlock-title,
		.CalloutBlock-description {
			color: ${theme.palette.primary.main};
		}
	`
);

const BackgroundImage = styled('div')(
	({theme}) => css`
		position: absolute;
		opacity: 25%;

		top: 45%;
		left: 40%;
		transform: translateX(-50%);
		width: 200%;

		z-index: 0;
	`
);

export const CalloutBlock: FC<CalloutBlockProps> = ({title, description, meta, actions}) => (
	<OuterWrapper>
		<InnerWrapper>
			<Container>
				<Content>
					<Typography variant='overline' className='CalloutBlock-title'>
						{meta}
					</Typography>
					<Typography variant='h2' className='CalloutBlock-title'>
						{title}
					</Typography>
					<Typography variant='body2' className='CalloutBlock-description' sx={{mb: 2}}>
						{description}
					</Typography>
					<ActionStack size='large' actions={actions} />
				</Content>
				<DualPhoneDisplay />
			</Container>
		</InnerWrapper>
	</OuterWrapper>
);
