import styled from '@emotion/styled';
import { ArrowForward, CheckCircleOutline } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { type FC, type FormEventHandler } from 'react';
import { type Action } from '../../../types/general';
import { ActionStack } from '../../base/ActionStack';
import { Button } from '../../base/Button';
import { Heading } from '../../base/Heading';
import { Mark } from '../../base/Mark';
import { FileInputField } from '../../form/FileInputField';
import { SelectField } from '../../form/SelectField';
import { TextField } from '../../form/TextField';
import { materials, services } from './data';

export type EstimatorProps = {
	isSimple?: boolean;
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

const today = new Date().toISOString().split('T')[0];

const getEstimate = async (data: FormData) => {
	const url = 'http://localhost:8000';

	const response = await fetch(`${url}/api/graphix-collab/get-estimate`, {
		method: 'post',
		body: data
	});

	// TODO: handle error, set helper text error and state for all inputs

	console.log(response);
};

export const Estimator: FC<EstimatorProps> = props => {
	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		return getEstimate(formData);
	};

	const sharedInputProps = {
		required: true,
		inputSize: 'large' as const
	};

	const titleSpacing = '1.5rem';
	const blockSpacing = '3rem';

	return (
		<form
			encType="multi-part/form"
			id="estimator-form"
			onSubmit={handleSubmit}
		>
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
				<Grid container spacing={3} marginBottom={titleSpacing}>
					{!props.isSimple && (
						<Grid item xs={12}>
							<Heading level={4}>👋 Your Information</Heading>
							<hr />
						</Grid>
					)}
					<Grid item xs={12} md={4}>
						<TextField
							{...sharedInputProps}
							defaultValue="John Snow"
							type="text"
							label="Full Name"
							name="name"
							data-span={3}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							{...sharedInputProps}
							defaultValue="johnsnow@gmail.com"
							type="email"
							label="Email"
							name="email"
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							inputSize="large"
							defaultValue="555555555"
							type="tel"
							label="Phone Number"
							placeholder="XXX-XXX-XXXX"
							name="email"
						/>
					</Grid>
					{!props.isSimple && (
						<Grid item xs={12} marginTop={titleSpacing}>
							<Heading level={4}>⚙️ Service Request</Heading>
							<hr />
						</Grid>
					)}

					<Grid item xs={12} md={4}>
						<SelectField
							{...sharedInputProps}
							label="Material Type"
							name="material-type"
							defaultValue={materials[0].value}
							options={materials}
						/>
					</Grid>
					<Grid item xs={12} md={3}>
						<SelectField
							{...sharedInputProps}
							defaultValue={services[0].value}
							label="Service Type"
							name="service-type"
							options={services}
						/>
					</Grid>
					<Grid item xs={12} md={2}>
						<TextField
							{...sharedInputProps}
							defaultValue={20}
							type="number"
							label="Quantity"
							min={10}
							max={9999}
							name="quantity"
						/>
					</Grid>
					<Grid item xs={12} md={3}>
						<TextField
							{...sharedInputProps}
							defaultValue="2023-09-14"
							type="date"
							label="Deadline"
							min={today}
							name="deadline"
						/>
					</Grid>
					{!props.isSimple && (
						<Grid item xs={12} marginTop={titleSpacing}>
							<Heading level={4}>🎨 Artwork Information</Heading>
							<hr />
						</Grid>
					)}
					<Grid item xs={12} md={8}>
						<FileInputField
							label="Artwork File"
							name="artwork-file"
							displayText="🌅 Upload your artwork"
							accept=".jpeg,.jpg,.png,.pdf,.svg"
							helperText="Although this step is optional, uploading your artwork helps us come up with a more accurate estimate."
						/>
					</Grid>
				</Grid>
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
						color="text"
						href="mailto:fashiongreekusc@gmail.com"
						endIcon={<ArrowForward />}
					>
						Not sure? Contact us
					</Button>
				</ActionStack>
			</ContentGrid>
		</form>
	);
};
