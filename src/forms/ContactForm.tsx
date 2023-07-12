import styled from '@emotion/styled';
import { CheckCircleOutline } from '@mui/icons-material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import CircularProgress from '@mui/material/CircularProgress';
import { ActionStack } from '../components/base/ActionStack';
import { Button } from '../components/base/Button';
import { useState, type FormEventHandler } from 'react';
import { TextField } from '../components/form/TextField';
import { TextAreaField } from '../components/form/TextAreaField';
import { CheckboxInput } from '../components/form/CheckboxInput';
import { Link } from '../components/base/Link';
import { CheckboxField } from '../components/form/CheckboxField';

const FieldGrid = styled.div`
	/* --content-grid-padding-block-end: 50%; */
	--content-grid-padding-block-end: 3rem;
	--action-stack-spacing: 1rem;

	max-width: 900px;
	padding-block-end: var(--content-grid-padding-block-end);

	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;

	.Form-title,
	hr {
		grid-column: span 2;
	}

	@media screen and (min-width: 425px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));

		.FormControl-root {
			grid-column: span 1;

			&:nth-of-type(3),
			&:nth-of-type(4) {
				grid-column: span 2;
			}
		}
	}
`;

type FormFieldNames = 'first_name' | 'last_name' | 'email' | 'message';

type FormFieldErrorBag = {
	[fieldName in FormFieldNames]?: string;
};

type FormState = {
	isSubmitting: boolean;
	handleSubmit: FormEventHandler<HTMLFormElement>;
	errors: FormFieldErrorBag;
};

const useForm = (endpoint: string): FormState => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<FormFieldErrorBag>({});

	const apiUrl = new URL(endpoint, process.env.apiUrl);

	const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
		event.preventDefault();

		(async () => {
			setIsSubmitting(true);

			const formData = new FormData(event.currentTarget);

			console.log(Object.fromEntries(formData.entries()));

			// const request = new Request(apiUrl.toString(), {
			// 	method: 'POST',
			// 	body: formData
			// });

			// const response = await fetch(request);

			// if (!response.ok) {
			// 	const errors = (await response.json()) as ApiErrorBag;
			// 	setErrors(errors);
			// }

			setIsSubmitting(false);
		})();
	};

	return {
		isSubmitting,
		errors,
		handleSubmit
	};
};

export const ContactForm = () => {
	const { handleSubmit, isSubmitting, errors } = useForm(
		'/send-message/contact'
	);

	return (
		<form noValidate id="contact-form" onSubmit={handleSubmit}>
			<FieldGrid>
				<TextField
					required
					label="First Name"
					name="first_name"
					placeholder="John"
					isInvalid={Boolean(errors.first_name)}
					helperText={errors.first_name}
				/>
				<TextField
					required
					label="Last Name"
					name="last_name"
					placeholder="Snow"
					isInvalid={Boolean(errors.last_name)}
					helperText={errors.last_name}
				/>
				<TextField
					required
					label="Email"
					name="email"
					type="email"
					placeholder="johnsnow@gmail.com"
					isInvalid={Boolean(errors.email)}
					helperText={errors.email}
				/>
				<TextAreaField
					required
					label="Message"
					name="message"
					placeholder="I would like to book an appointment."
					isInvalid={Boolean(errors.message)}
					helperText={errors.message}
					rows={5}
				/>
				<CheckboxField
					required
					label="Terms"
					name="terms"
					options={[
						{
							value: 'agree',
							label: (
								<>
									I agree to the{' '}
									<Link href="https://google.com/">
										Terms and Conditions
									</Link>{' '}
									and the <Link>Privacy Policy</Link>.
								</>
							)
						},
						{
							value: 'hello',
							label: (
								<>
									I agree to the{' '}
									<Link href="https://google.com/">
										Terms and Conditions
									</Link>{' '}
									and the <Link>Privacy Policy</Link>.
								</>
							)
						}
					]}
					isInvalid={Boolean(errors.message)}
					helperText={errors.message}
				/>
			</FieldGrid>
			<ActionStack>
				<Button
					size="large"
					color="secondary"
					endIcon={
						isSubmitting ? (
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
					{isSubmitting ? 'Sending...' : 'Send Message'}
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
		</form>
	);
};
