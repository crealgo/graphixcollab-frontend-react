import styled from '@emotion/styled';
import { CheckCircleOutline, Refresh } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import { ActionStack } from '../components/base/ActionStack';
import { Button } from '../components/base/Button';
import { Link } from '../components/base/Link';
import { CheckboxField } from '../components/form/CheckboxField';
import { TextAreaField } from '../components/form/TextAreaField';
import { TextField } from '../components/form/TextField';
import { useForm } from '../hooks/useForm';
import { useRef } from 'react';
import { renderFormAlert } from './renderFormAlert';

const FieldGrid = styled.div`
	/* --content-grid-padding-block-end: 50%; */
	--content-grid-padding-block-end: 3rem;
	--action-stack-spacing: 1rem;

	max-width: 40rem;
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

export const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const {
		handleSubmit,
		handleReset,
		isSuccessful,
		isSubmitting,
		isSubmitted,
		errors
	} = useForm();

	return (
		<form
			ref={formRef}
			noValidate
			method="post"
			action="send-message/contact"
			name="contact-form"
			onSubmit={handleSubmit}
		>
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
							value: 'terms',
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
					isInvalid={Boolean(errors.terms)}
					helperText={errors.terms}
				/>
				{isSubmitted && renderFormAlert(isSuccessful)}
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
					color="tertiary"
					endIcon={<Refresh />}
					type="button"
					onClick={handleReset}
				>
					Reset
				</Button>
			</ActionStack>
		</form>
	);
};
