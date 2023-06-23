import { ArrowForward, CheckCircleOutline, Restore } from '@mui/icons-material';
import { styled } from '@mui/material';
import { type FC } from 'react';
import { useForm } from 'react-hook-form';
import { type Action } from '../../../types/general';
import { ActionStack } from '../../base/ActionStack';
import { Button } from '../../base/Button';
import { Heading } from '../../base/Heading';
import { Mark } from '../../base/Mark';
import { FormControl } from '../../form/FormControl';
import { Input } from '../../form/Input';
import { onValid } from './utils';
import { materials, serviceContent, services } from './data';
import { Select } from '../../form/Select';

export type EstimatorProps = {
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
	/* gap: 2rem; */
	max-width: 900px;
	z-index: 1;

	padding-block-end: var(--content-grid-padding-block-end);

	.ActionStack-root {
		margin-top: var(--action-stack-spacing);
	}
`;

const Instructions = styled('em')`
	display: block;
	margin-block-start: var(--spacing-2);
	padding-block-start: var(--spacing-2);
	margin-block-end: var(--spacing-10);
	border-block-start: solid 2px var(--color-brand-magenta-lighter);
`;

const FieldGrid = styled('div')`
	display: grid;
	max-width: 50rem;
	place-items: start;
	gap: 1rem;
	grid-template-columns: 1fr;

	margin-bottom: 3rem;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(6, 1fr);

		.FormControl-root {
			grid-column: span 2;

			&:nth-of-type(1) {
				grid-column: span 3;
			}

			&:nth-of-type(2) {
				grid-column: span 3;
			}
		}
	}
`;

export type FormData = {
	name: string;
	email: string;
	materialType: string;
	serviceType: string;
	quantity: number;
	artworkType: string;
	deadline: string;
};

// const fields = [
// 		{
// 			label: 'Name',
// 			type: 'text'
// 		},
// 		{
// 			label: 'Email',
// 			type: 'email',
// 			helperText: 'The estimate will be sent here.'
// 		},
// 		{
// 			label: 'Material Type',
// 			type: 'select',
// 			options: materials,
// 			helperText: 'The type of material to print on'
// 		},
// 		{
// 			label: 'Service Type',
// 			type: 'select',
// 			options: services
// 		},
// 		{
// 			label: 'Artwork Type',
// 			type: 'select',
// 			helperText: 'This is printed on the material'
// 		},
// 		{
// 			label: 'Quantity',
// 			type: 'number',
// 			min: 10,
// 			max: 99999
// 		},
// 		{
// 			label: 'Deadline',
// 			type: 'date',
// 			min: today
// 		}
// 	] as const;

const today = new Date().toISOString().split('T')[0];

export const Estimator: FC<EstimatorProps> = () => {
	const { handleSubmit, formState, register } = useForm<FormData>();

	const { errors, touchedFields } = formState;

	return (
		<form id="estimator-form" onSubmit={handleSubmit(onValid)}>
			<ContentGrid>
				<Heading level={2}>
					Get a quick{' '}
					<Mark text color="magenta">
						estimate
					</Mark>
					!
				</Heading>
				<Instructions>
					Change the options below to what you’re looking for.
				</Instructions>
				<FieldGrid className="FieldGrid-root">
					<FormControl isFullWidth label="Name" labelFor="name">
						<Input
							inputSize="large"
							id="name"
							type="text"
							placeholder="John Snow"
						/>
					</FormControl>
					<FormControl
						isFullWidth
						label="Email"
						labelFor="email"
						helperText="The estimate will be sent here."
						helperTextId="email-helper-text"
					>
						<Input
							inputSize="large"
							placeholder="johnsnow@aol.com"
							type="email"
							aria-describedby="email-helper-text"
						/>
					</FormControl>
					<FormControl
						isFullWidth
						label="Material Type"
						labelFor="material-type"
						helperText="The type of material to print on"
						helperTextId="material-type-helper-text"
					>
						<Select
							inputSize="large"
							options={materials}
							id="material-type"
							aria-describedby="material-type-helper-text"
						/>
					</FormControl>
					<FormControl
						isFullWidth
						label="Material Type"
						labelFor="service-type"
					>
						<Select
							inputSize="large"
							options={services}
							id="service-type"
						/>
					</FormControl>
					<FormControl
						isFullWidth
						label="Artwork Type"
						labelFor="artwork-type"
						helperText="What you want printed on the material."
						helperTextId="artwork-type-helper-text"
					>
						<Select
							inputSize="large"
							options={serviceContent}
							id="artwork-type"
							aria-describedby="artwork-type-helper-text"
						/>
					</FormControl>
					<FormControl
						isFullWidth
						label="Quantity"
						labelFor="quantity"
						helperText="How many you want printed."
						helperTextId="quantity-helper-text"
					>
						<Input
							inputSize="large"
							type="number"
							defaultValue={10}
							min={10}
							max={9999}
							id="quantity"
							aria-describedby="quantity-helper-text"
						/>
					</FormControl>
					<FormControl
						isFullWidth
						label="Deadline"
						labelFor="deadline"
						helperText="When you need the material by."
						helperTextId="deadline-helper-text"
					>
						<Input
							inputSize="large"
							type="date"
							defaultValue={today}
							min={today}
							id="deadline"
							aria-describedby="deadline-helper-text"
						/>
					</FormControl>
				</FieldGrid>
				<ActionStack>
					<Button
						size="large"
						color="secondary"
						endIcon={<CheckCircleOutline />}
						type="submit"
					>
						Get Estimate
					</Button>
					<Button
						size="large"
						color="tertiary"
						endIcon={<Restore />}
						type="reset"
					>
						Reset
					</Button>
					{/* FIXME: */}
					<Button
						size="large"
						color="text"
						endIcon={<ArrowForward />}
					>
						Not sure
					</Button>
				</ActionStack>
			</ContentGrid>
		</form>
	);
};
