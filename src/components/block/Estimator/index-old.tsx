import styled from '@emotion/styled';
import { ArrowForward, CheckCircleOutline } from '@mui/icons-material';
import { Alert, AlertTitle, CircularProgress, Grid } from '@mui/material';
import { type FormEvent, type FC, createRef } from 'react';
import {
	type SubmitErrorHandler,
	useForm,
	type FieldValues,
	type SubmitHandler
} from 'react-hook-form';
import { type Action } from '../../../types/general';
import { ActionStack } from '../../base/ActionStack';
import { Button } from '../../base/Button';
import { Heading } from '../../base/Heading';
import { Mark } from '../../base/Mark';
import { SelectField } from '../../form/SelectField';
import { TextField } from '../../form/TextField';
import { materials, services } from './data';
import { FileInputField } from '../../form/FileInputField';
import clsx from 'clsx';

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
	font-style: normal;
	margin-block-start: var(--spacing-2);
	padding-block-start: var(--spacing-2);
	margin-block-end: var(--spacing-10);
	border-block-start: solid 2px var(--color-brand-magenta-lighter);

	* > mark {
		display: inline;
	}

	max-width: 40rem;
`;

const today = new Date().toISOString().split('T')[0];

type FormDataInputs = {
	name: string;
	email: string;
	phone: string;
	material: string;
	service: string;
	quantity: string;
	deadline: string;
	artwork: string;
};

export const Estimator: FC<EstimatorProps> = props => {
	const { formState, handleSubmit, register } = useForm<FormDataInputs>();

	const onValid: SubmitHandler<FieldValues> = async data => {
		// console.log('deadline', data.deadline);
		console.log('data', JSON.stringify(data));
	};

	const onInvalid: SubmitErrorHandler<FieldValues> = (errors, event) => {
		console.log('errors', errors);
	};

	const titleSpacing = '1.5rem';

	return (
		<form
			encType="multipart/form-data"
			id="estimator-form"
			onSubmit={handleSubmit(onValid, onInvalid)}
		>
			<ContentGrid>
				<Heading level={2}>
					Get {props.isSimple ? 'a quick ' : 'an '}
					<Mark text color="magenta">
						estimate
					</Mark>
					!
				</Heading>
				<Instructions>
					<Mark color="magenta">
						Fill out the form below to get your quick estimate, and
						a step closer to getting your project started!
					</Mark>
				</Instructions>
				<Grid
					container
					rowSpacing={3}
					columnSpacing={1.5}
					marginBottom={titleSpacing}
				>
					{!props.isSimple && (
						<Grid item xs={12}>
							<Heading level={4}>👋 Your Information</Heading>
							<hr />
						</Grid>
					)}
					<Grid item xs={12} sm={4}>
						<TextField
							inputSize="large"
							label="Full Name"
							className={clsx({
								touched: formState.touchedFields.name,
								error: Boolean(formState.errors.name)
							})}
							{...register('name', { required: true })}
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							inputSize="large"
							label="Email"
							{...register('email', { required: true })}
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							inputSize="large"
							type="tel"
							label="Phone Number"
							placeholder="XXX-XXX-XXXX"
							{...register('phone', { required: true })}
						/>
					</Grid>
					{!props.isSimple && (
						<Grid item xs={12} marginTop={titleSpacing}>
							<Heading level={4}>⚙️ Service Request</Heading>
							<hr />
						</Grid>
					)}

					<Grid item xs={12} sm={4}>
						<SelectField
							inputSize="large"
							label="Material Type"
							options={materials}
							{...register('material', { required: true })}
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<SelectField
							inputSize="large"
							label="Service Type"
							options={services}
							{...register('service', { required: true })}
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<TextField
							inputSize="large"
							label="Quantity"
							type="number"
							{...register('quantity', {
								required: true,
								min: 10,
								max: 9999
							})}
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField
							inputSize="large"
							type="date"
							label="Deadline"
							{...register('deadline', {
								required: true,
								min: today
							})}
						/>
					</Grid>
					{!props.isSimple && (
						<Grid item xs={12} marginTop={titleSpacing}>
							<Heading level={4}>🎨 Artwork Information</Heading>
							<hr />
						</Grid>
					)}
					<Grid item xs={12} sm={8}>
						<FileInputField
							multiple
							inputSize="large"
							label="Artwork File(s)"
							displayText="🌅 Upload your artwork"
							accept=".gif,.jpeg,.jpg,.png,.pdf,.svg,.webp"
							helperText="Although this step is optional, uploading your artwork helps us come up with a more accurate estimate."
							{...register('artwork')}
						/>
					</Grid>
				</Grid>
				{formState.isSubmitSuccessful && (
					<Alert severity="success">
						<AlertTitle>Success!</AlertTitle>
						We’ve received your request and will get back to you
						shortly.
					</Alert>
				)}
				<ActionStack>
					<Button
						size="large"
						color="secondary"
						endIcon={
							formState.isSubmitting ? (
								<CircularProgress
									size="inherit"
									thickness={6}
									sx={{ color: 'white' }}
								/>
							) : (
								<CheckCircleOutline />
							)
						}
						type="submit"
					>
						{formState.isSubmitting ? 'Sending...' : 'Get Estimate'}
					</Button>
					<Button
						size="large"
						color="text"
						href="mailto:graphixcollab@gmail.com"
						endIcon={<ArrowForward />}
					>
						Not sure? Contact us
					</Button>
				</ActionStack>
			</ContentGrid>
		</form>
	);
};
