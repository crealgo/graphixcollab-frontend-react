import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowForward, CheckCircleOutline } from '@mui/icons-material';
import { Alert, AlertTitle, CircularProgress, Grid } from '@mui/material';
import { Fragment, type FC } from 'react';
import {
	FormProvider,
	useForm,
	type FieldValues,
	type SubmitErrorHandler,
	type SubmitHandler
} from 'react-hook-form';
import * as yup from 'yup';
import { type Action } from '../../../types/general';
import { ActionStack } from '../../base/ActionStack';
import { Button } from '../../base/Button';
import { Heading } from '../../base/Heading';
import { Mark } from '../../base/Mark';
import { DynamicControl } from '../../form/DynamicControl';
import { estimatorFields, type FormFields } from './estimatorFields';

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

const validationSchema = yup.object().shape({
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
		mode: 'onBlur',
		// @ts-expect-error yup types are hard to match with custom
		resolver: yupResolver(validationSchema),
		reValidateMode: 'onChange'
	});

	const { handleSubmit, formState, setError } = formMethods;

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
			'/send-message/estimate-request',
			process.env.apiUrl
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

	const onInvalid: SubmitErrorHandler<FieldValues> = errors => {
		console.log('errors', errors);
	};

	const titleSpacing = '1.5rem';

	const fields = estimatorFields.map((group, groupIndex) => {
		return (
			<Fragment key={groupIndex}>
				{!props.isSimple && (
					<Grid item xs={12} marginTop={groupIndex > 0 ? 3 : 0}>
						<Heading level={4}>{group.legend}</Heading>
						<hr />
					</Grid>
				)}
				{group.fields.map((field, fieldIndex) => {
					if (props.isSimple && field.name === 'phone') {
						return undefined;
					}

					return (
						<Grid key={fieldIndex} item xs={12} sm={field.span}>
							<DynamicControl {...field} />
						</Grid>
					);
				})}
			</Fragment>
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
					<Grid container spacing={2} marginBottom={titleSpacing}>
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
