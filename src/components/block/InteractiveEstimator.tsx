import {CheckCircleOutline, PaletteOutlined} from '@mui/icons-material';
import {type FC} from 'react';
import {type Action} from '../../types/general';
import {ActionStack} from '../base/ActionStack';
import {Block} from '../base/Block';
import {Container} from '../base/Container';
import {Heading} from '../base/Heading';
import {InteractiveSelector} from '../base/InteractiveSelector';
import {styled} from '@mui/material';

export type InteractiveEstimatorProps = {
	actions?: Action[];
};

const StyledBlock = styled(Block)`
	overflow: hidden;
`;

const ContentGrid = styled('div')`
	display: grid;
	gap: 2rem;
	max-width: ${({theme}) => theme.breakpoints.values.md}px;
	z-index: 1;

	padding-block-end: 15rem;

	.ActionStack-root {
		margin-top: 1rem;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding-block-end: 5rem;

		.ActionStack-root {
			margin-top: 1.5rem;
		}
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		padding-block-end: unset;
	}
`;

const AdornmentImage = styled('img')`
	position: relative;
	width: 100%;
	margin-bottom: -20rem;
	height: auto;
	z-index: 0;

	bottom: 0;
	/* left: 50%; */
	/* transform: translateX(-20%) translateY(50%); */

	${({theme}) => theme.breakpoints.up('md')} {
		margin-bottom: unset;

		position: absolute;
		width: 30rem;
		right: 0;
		bottom: 0;
		transform: translateX(20%);
		height: auto;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		width: 40rem;
		transform: translateX(25%) translateY(6%);
	}
`;

export const InteractiveEstimator: FC<InteractiveEstimatorProps> = () => (
	<Container>
		<StyledBlock
			isRounded
			color="grey"
			className="InteractiveEstimator-root"
		>
			<ContentGrid>
				<Heading level={4}>Get an estimate!</Heading>
				<Heading level={2}>
					{'I would like a custom '}
					<InteractiveSelector
						options={[
							{
								label: 'Sash',
								value: 'sash'
							},
							{
								label: 'T-Shirt',
								value: 't-shirt'
							},
							{
								label: 'Poster',
								value: 'poster'
							},
							{
								label: 'Sticker',
								value: 'sticker'
							}
						]}
					/>
					{' that is '}
					<InteractiveSelector
						options={[
							{
								label: 'embroidered',
								value: 'embroidered'
							},
							{
								label: 'printed',
								value: 'printed'
							}
						]}
					/>
					{' with '}
					<InteractiveSelector
						options={[
							{
								label: 'my name',
								value: 'name'
							},
							{
								label: 'my initials',
								value: 'initials'
							},
							{
								label: 'a quote',
								value: 'initials'
							}
						]}
					/>
				</Heading>
				<em>Change the options below to what you’re looking for.</em>
				<ActionStack
					actions={[
						{
							label: 'Get an Estimate',
							size: 'large',
							color: 'secondary',
							endIcon: <CheckCircleOutline />
						},
						{
							label: 'Talk to a Designer',
							size: 'large',
							color: 'text',
							endIcon: <PaletteOutlined />
						}
					]}
				/>
				<AdornmentImage
					src="assets/juicy-business-coach-explains-the-material@ogw.webp"
					alt=""
				/>
			</ContentGrid>
		</StyledBlock>
	</Container>
);
