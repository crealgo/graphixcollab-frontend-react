import styled from '@emotion/styled';
import { ArrowForward, CheckCircleOutline } from '@mui/icons-material';
import { Alert, AlertTitle, Grid } from '@mui/material';
import { type FC } from 'react';
import { useForm, type SubmitHandler, type FieldValues } from 'react-hook-form';
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

type FormDataInputs = {
	'name': string;
	'email': string;
	'phone': string;
	'material-type': string;
	'service-type': string;
	'quantity': string;
	'deadline': string;
	'artwork-file': string;
};

type FormDataTouched = {
	[name in keyof FormDataInputs]?: boolean;
};

type FormDataErrors = {
	[name in keyof FormDataInputs]?: string[];
};

// const useForm = () => {
// 	const [success, setSuccess] = useState(false);
// 	const [errors, setErrors] = useState<FormDataErrors>({});
// 	const [touched, setTouched] = useState<FormDataTouched>({});
// 	const formRef = useRef<HTMLFormElement>();

// 	const getEstimate = async (data: FormData) => {
// 		const url = 'http://localhost:8000';

// 		// const testData = JSON.stringify({
// 		// 	'name': 'John Snow',
// 		// 	'email': 'johnsnow@gmail.com',
// 		// 	'phone': '5555555555',
// 		// 	'material-type': 't-shirt',
// 		// 	'service-type': 'embroidery',
// 		// 	'quantity': '20',
// 		// 	'deadline': '2023-09-14',
// 		// 	'artwork-file': [
// 		// 		new File([''], 'test-file-1.png', { type: 'image/png' }),
// 		// 		new File([''], 'test-file-2.png', { type: 'image/png' }),
// 		// 		new File([''], 'test-file-3.png', { type: 'image/png' })
// 		// 	]
// 		// });

// 		const response = await fetch(`${url}/api/graphix-collab/get-estimate`, {
// 			method: 'post',
// 			body: data
// 		});

// 		if (response.ok) {
// 			setSuccess(true);
// 			return;
// 		}

// 		const newErrors = (await response.json()) as FormDataErrors;

// 		setTouched({
// 			'name': true,
// 			'email': true,
// 			'phone': true,
// 			'material-type': true,
// 			'service-type': true,
// 			'quantity': true,
// 			'deadline': true,
// 			'artwork-file': true
// 		});

// 		setErrors(newErrors);
// 	};

// 	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
// 		event.preventDefault();
// 		formRef.current = event.currentTarget;
// 		const formData = new FormData(event.currentTarget);

// 		const filesArray = formData.get('artwork-file');

// 		if (filesArray) {
// 			// console.log('filesArray', filesArray);
// 			formData.delete('artwork-file');
// 			formData.append('artwork-file[]', filesArray);
// 		}

// 		return getEstimate(formData);
// 	};

// 	return {
// 		handleSubmit,
// 		success,
// 		touched,
// 		errors
// 	};
// };

export const Estimator: FC<EstimatorProps> = props => {
	const { handleSubmit, register } = useForm();

	const onValid: SubmitHandler<FieldValues> = async data => {
		console.log('data', data);
	};

	const titleSpacing = '1.5rem';

	return (
		<form
			encType="multipart/form-data"
			id="estimator-form"
			onSubmit={handleSubmit(onValid)}
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
							inputSize="large"
							defaultValue="John Snow"
							label="Full Name"
							{...register('name', { required: true })}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							inputSize="large"
							defaultValue="johnsnow@gmail.com"
							label="Email"
							{...register('email', { required: true })}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							inputSize="large"
							defaultValue="5555555555"
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

					<Grid item xs={12} md={4}>
						<SelectField
							inputSize="large"
							label="Material Type"
							defaultValue={materials[0].value}
							options={materials}
							{...register('material-type', { required: true })}
						/>
					</Grid>
					<Grid item xs={12} md={3}>
						<SelectField
							inputSize="large"
							defaultValue={services[0].value}
							label="Service Type"
							options={services}
							{...register('service-type', { required: true })}
						/>
					</Grid>
					<Grid item xs={12} md={2}>
						<TextField
							inputSize="large"
							defaultValue={20}
							label="Quantity"
							type="number"
							{...register('quantity', {
								required: true,
								min: 10,
								max: 9999,
								valueAsNumber: true
							})}
						/>
					</Grid>
					<Grid item xs={12} md={3}>
						<TextField
							inputSize="large"
							defaultValue="2023-09-14"
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
					<Grid item xs={12} md={8}>
						<FileInputField
							multiple
							label="Artwork File(s)"
							displayText="🌅 Upload your artwork"
							accept=".gif,.jpeg,.jpg,.png,.pdf,.svg,.webp"
							helperText="Although this step is optional, uploading your artwork helps us come up with a more accurate estimate."
						/>
					</Grid>
				</Grid>
				{/* {success && (
					<Alert severity="success">
						<AlertTitle>Success!</AlertTitle>
						We’ve received your request and will get back to you
						shortly.
					</Alert>
				)} */}
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
