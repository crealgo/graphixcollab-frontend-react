import { ArrowForward, CheckCircleOutline } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { type FC } from 'react';
import { ActionStack } from '../components/base/ActionStack';
import { Button } from '../components/base/Button';
import { Mark } from '../components/base/Mark';
import { useForm } from '../hooks/useForm';
import { FormGrid } from './FormGrid';
import { FormHeader } from './FormHeader';
import { FormItemGenerator } from './FormItemGenerator';
import { renderFormAlert } from './__utils__/renderFormAlert';
import { estimateFormItems } from './__data__/estimateFormItems';

export type EstimatorProps = {
	isSimple?: boolean;
	// actions?: Action[];
};

export const Estimator: FC<EstimatorProps> = props => {
	const formState = useForm();

	return (
		<FormGrid
			noValidate
			method="post"
			action="send-message/estimate-request"
			encType="multipart/form-data"
			id="estimator-form"
			onReset={formState.handleReset}
			onSubmit={formState.handleSubmit}
		>
			<FormHeader
				title={
					<>
						Get {props.isSimple ? 'a quick ' : 'an '}
						<Mark text color="magenta">
							estimate
						</Mark>
						!
					</>
				}
				instructions="Fill out the form below to get your quick estimate, and a step closer to getting your project started!"
			/>
			<FormItemGenerator
				items={estimateFormItems}
				formState={formState}
			/>
			{formState.isSubmitted && renderFormAlert(formState.isSuccessful)}
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
					{formState.isSubmitting ? 'Sending...' : 'Get Estimate'}
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
