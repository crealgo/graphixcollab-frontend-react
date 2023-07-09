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
import { DynamicControl } from './DynamicControl';
import { estimatorFields, type FormFields } from './estimatorFields';
import { paramCase } from 'change-case';

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

export const Estimator: FC<EstimatorProps> = props => {
	const { formState, handleSubmit, register } = useForm<FormFields>();

	const onValid: SubmitHandler<FieldValues> = async data => {
		const formData = new FormData();

		Object.entries(data).forEach(([key, value]) => {
			if (key.includes('artwork')) {
				formData.getAll('artwork').forEach((file, fileIndex) => {
					formData.append(`artwork[${fileIndex}]`, file);
				});

				formData.delete('artwork');
			}

			formData.append(key, value as string);
		});

		const url = new URL(
			'api/graphix-collab/get-estimate',
			'http://localhost:8000'
		);

		const response = await fetch(url, {
			method: 'POST',
			body: formData
		});

		const json = (await response.json()) as Record<string, any>;

		console.log('json', json);
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
				<Grid container rowSpacing={5} marginBottom={titleSpacing}>
					{estimatorFields.map((group, groupIndex) => {
						const fieldsetId = paramCase(group.legend);

						return (
							<Grid
								key={groupIndex}
								item
								aria-labelledby={fieldsetId}
							>
								{!props.isSimple && (
									<>
										<Heading level={4}>
											{group.legend}
										</Heading>
										<hr />
									</>
								)}
								<Grid container spacing={2}>
									{group.fields.map((field, fieldIndex) => (
										<Grid
											key={fieldIndex}
											item
											xs={12}
											sm={field.span}
										>
											<DynamicControl {...field} />
										</Grid>
									))}
								</Grid>
							</Grid>
						);
					})}
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
