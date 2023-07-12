import styled from '@emotion/styled';
import { ArrowForward, CheckCircleOutline } from '@mui/icons-material';
import { CircularProgress, Grid } from '@mui/material';
import { type FC } from 'react';
import { ActionStack } from '../../components/base/ActionStack';
import { Button } from '../../components/base/Button';
import { Heading } from '../../components/base/Heading';
import { Mark } from '../../components/base/Mark';
import { useForm } from '../../hooks/useForm';
import { renderFormAlert } from '../renderFormAlert';
import { renderFields } from './renderFields';

export type EstimatorProps = {
	isSimple?: boolean;
	// actions?: Action[];
};

const FormGrid = styled.form`
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
	const {
		handleSubmit,
		handleReset,
		isSubmitted,
		isSuccessful,
		isSubmitting,
		errors
	} = useForm();

	return (
		<FormGrid
			noValidate
			method="post"
			action="send-message/estimate-request"
			encType="multipart/form-data"
			id="estimator-form"
			onReset={handleReset}
			onSubmit={handleSubmit}
		>
			<Heading level={2}>
				Get {props.isSimple ? 'a quick ' : 'an '}
				<Mark text color="magenta">
					estimate
				</Mark>
				!
			</Heading>
			<Instructions>
				<Mark color="magenta">
					Fill out the form below to get your quick estimate, and a
					step closer to getting your project started!
				</Mark>
			</Instructions>
			<Grid container spacing="1rem" marginBottom="2rem">
				{renderFields(errors, props.isSimple)}
				<Grid item xs={12}>
					{isSubmitted && renderFormAlert(isSuccessful)}
				</Grid>
			</Grid>
			<ActionStack>
				<Button
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
					{isSubmitting ? 'Sending...' : 'Get Estimate'}
				</Button>
				<Button
					color="text"
					href="mailto:graphixcollab@gmail.com"
					endIcon={<ArrowForward />}
				>
					Not sure? Contact us
				</Button>
			</ActionStack>
		</FormGrid>
	);
};
