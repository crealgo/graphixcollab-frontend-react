import { CheckCircleOutline, PaletteOutlined } from '@mui/icons-material';
import { styled } from '@mui/material';
import { type FC } from 'react';
import { type Action } from '../../types/general';
import { ActionStack } from '../base/ActionStack';
import { Block } from '../base/Block';
import { Container } from '../base/Container';
import { Heading } from '../base/Heading';
import { InteractiveSelector } from '../base/InteractiveSelector';
import { Mark } from '../base/Mark';
// import styled from '@emotion/styled'

export type InteractiveEstimatorProps = {
	actions?: Action[];
};

const ContentGrid = styled('div')`
	--content-grid-padding-block-end: 50%;
	--action-stack-spacing: 1rem;

	@media screen and (min-width: 425px) {
		--content-grid-padding-block-end: 52%;
	}

	@media screen and (min-width: 768px) {
		--content-grid-padding-block-end: 6.5rem;
	}

	@media screen and (min-width: 911px) {
		--content-grid-padding-block-end: 5rem;
	}

	@media screen and (min-width: 1024px) {
		--content-grid-padding-block-end: 3rem;
	}

	display: grid;
	gap: 2rem;
	max-width: 900px;
	z-index: 1;

	padding-block-end: var(--content-grid-padding-block-end);

	.ActionStack-root {
		margin-top: var(--action-stack-spacing);
	}
`;

const AdornmentImage = styled('img')`
	--adornment-image-position: absolute;
	--adornment-image-z-index: 0;

	--adornment-image-width: 100%;
	--adornment-image-max-width: 100%;
	--adornment-image-inset: auto -1rem 0 auto;

	@media screen and (min-width: 768px) {
		--adornment-image-max-width: 36rem;
		--adornment-image-inset: auto -1rem -2rem auto;
	}

	padding: 0 0 0 1rem;
	max-width: var(--adornment-image-max-width);
	width: var(--adornment-image-width);
	height: auto;

	position: var(--adornment-image-position);
	inset: var(--adornment-image-inset);

	z-index: var(--adornment-image-z-index);
`;

const materials = [
	{
		label: 'sash',
		value: 'sash'
	},
	{
		label: 't-shirt',
		value: 't-shirt'
	},
	{
		label: 'poster',
		value: 'poster'
	},
	{
		label: 'sticker',
		value: 'sticker'
	}
];

const services = [
	{
		label: 'embroidered',
		value: 'embroidered'
	},
	{
		label: 'printed',
		value: 'printed'
	}
];

const serviceContent = [
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
];

const Instructions = styled('em')`
	display: block;
	max-width: var(--spacing-96);
	margin-block-start: var(--spacing-2);
	padding-block-start: var(--spacing-2);
	border-block-start: solid 2px var(--color-brand-magenta-lighter);
`;

export const InteractiveEstimator: FC<InteractiveEstimatorProps> = () => (
	<Container>
		<Block
			isClipped
			isRounded
			color="grey"
			className="InteractiveEstimator-root"
		>
			<ContentGrid>
				<Heading level={4}>
					Get an{' '}
					<Mark text color="magenta">
						estimate
					</Mark>
					!
				</Heading>
				<Heading level={2}>
					I would like a custom{' '}
					<InteractiveSelector options={materials} /> that is{' '}
					<InteractiveSelector options={services} /> with{' '}
					<InteractiveSelector options={serviceContent} />{' '}
				</Heading>
				<Instructions>
					Change the options above to what you’re looking for.
				</Instructions>
				<ActionStack
					actions={[
						{
							label: 'Estimate',
							size: 'large',
							color: 'secondary',
							endIcon: <CheckCircleOutline />
						},
						{
							label: 'Design',
							size: 'large',
							color: 'text',
							endIcon: <PaletteOutlined />
						}
					]}
				/>
			</ContentGrid>
			<AdornmentImage
				src="assets/juicy-business-coach-explains-the-material-min@512w.webp"
				alt="Explaining the material"
			/>
		</Block>
	</Container>
);
