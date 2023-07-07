import styled from '@emotion/styled';
import { ArrowForward, CheckCircleOutline } from '@mui/icons-material';
import { Alert, AlertTitle, CircularProgress, Grid } from '@mui/material';
import { type FC } from 'react';
import {
	useForm,
	type FieldValues,
	type SubmitErrorHandler,
	type SubmitHandler
} from 'react-hook-form';
import { type Action } from '../../../types/general';
import { ActionStack } from '../../base/ActionStack';
import { Button } from '../../base/Button';
import { Heading } from '../../base/Heading';
import { Mark } from '../../base/Mark';
import {
	type FormFields,
	estimatorFields,
	type FieldBag
} from './esimatorFields';
import { SelectField } from '../../form/SelectField';
import { TextField } from '../../form/TextField';

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

export const Estimator: FC<EstimatorProps> = props => {
	const { formState, handleSubmit, register } = useForm<FormFields>();

	const onValid: SubmitHandler<FieldValues> = async data => {
		// console.log('deadline', data.deadline);
		console.log('data', JSON.stringify(data));
	};

	const onInvalid: SubmitErrorHandler<FieldValues> = (errors, event) => {
		console.log('errors', errors);
	};

	const titleSpacing = '1.5rem';

	const renderFields = (fields: FieldBag[]) =>
		fields.map(
			({ span, required, min, max, disabled, ...field }, fieldIndex) => {
				const InputComponent =
					field.type === 'select' ? SelectField : TextField;

				return (
					<Grid key={fieldIndex} xs={span}>
						<InputComponent
							{...field}
							{...register(field.name, {
								required,
								min,
								max,
								disabled
							})}
						/>
					</Grid>
				);
			}
		);

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
					{estimatorFields.map((group, groupIndex) => (
						<fieldset key={groupIndex}>
							<legend>{group.legend}</legend>
							<Grid item container spacing={2}>
								{renderFields(group.fields)}
							</Grid>
						</fieldset>
					))}
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
