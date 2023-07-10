import styled from '@emotion/styled';
import { ArrowForward, CheckCircleOutline } from '@mui/icons-material';
import { Alert, AlertTitle, CircularProgress, Grid } from '@mui/material';
import { type FC } from 'react';
import {
	FormProvider,
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
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const validationSchema = yup.object<FormFields>().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	phone: yup.lazy(value => {
		return value
			? yup.string().matches(/^\d{10}$/, 'Phone number is not valid')
			: yup.string();
	}),
	material: yup.string().required(),
	service: yup.string().required(),
	quantity: yup.number().min(10).max(9999).required(),
	deadline: yup.date().required(),
	delivery: yup.string().required(),
	artwork: yup.mixed().notRequired()
});

export const Estimator: FC<EstimatorProps> = props => {
	const formMethods = useForm<FormFields>({
		resolver: yupResolver(validationSchema)
	});

	const { handleSubmit, formState, setError, clearErrors } = formMethods;

	const onValid: SubmitHandler<FieldValues> = async (data, event) => {
		console.log('data', data, event?.currentTarget);

		const formData = new FormData();

		for await (const [key, value] of Object.entries(data)) {
			if (key === 'artwork') {
				[...(value as File[])].forEach((file, fileIndex) => {
					formData.append(`artwork[${fileIndex}]`, file);
				});

				formData.delete('artwork');
			}

			formData.append(key, value as string);
		}

		const url = new URL(
			'api/graphix-collab/get-estimate',
			'http://localhost:8000'
		);

		const response = await fetch(url, {
			method: 'POST',
			body: formData
		});

		if (!response.ok) {
			const json = (await response.json()) as Record<string, any>;
			console.log('json', json);

			Object.entries(json).forEach(([key, value]) => {
				setError(key as keyof FormFields, {
					type: 'server',
					message: (value as string[]).join(' ')
				});
			});
		}
	};

	const onInvalid: SubmitErrorHandler<FieldValues> = (errors, event) => {
		console.log('errors', errors);
	};

	const titleSpacing = '1.5rem';

	const fields = estimatorFields.map((group, groupIndex) => {
		const fieldsetId = paramCase(group.legend);

		return (
			<Grid key={groupIndex} item xs={12} aria-labelledby={fieldsetId}>
				{!props.isSimple && (
					<>
						<Heading level={4}>{group.legend}</Heading>
						<hr style={{ marginBottom: '1rem' }} />
					</>
				)}
				<Grid container spacing={2}>
					{group.fields.map((field, fieldIndex) => (
						<Grid key={fieldIndex} item xs={12} sm={field.span}>
							<DynamicControl {...field} />
						</Grid>
					))}
				</Grid>
			</Grid>
		);
	});

	return (
		<FormProvider {...formMethods}>
			<form
				noValidate
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
							Fill out the form below to get your quick estimate,
							and a step closer to getting your project started!
						</Mark>
					</Instructions>
					<Grid container rowSpacing={5} marginBottom={titleSpacing}>
						{fields}
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
							{formState.isSubmitting
								? 'Sending...'
								: 'Get Estimate'}
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
		</FormProvider>
	);
};
