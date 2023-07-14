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
import styled from '@emotion/styled';

const filteredItems = estimateFormItems.filter(
	item => item.itemType !== 'title'
);

const StyledFormGrid = styled(FormGrid)`
	.FormControl-root {
		@media screen and (min-width: 500px) {
			grid-column: span 3;
		}

		@media screen and (min-width: 688px) {
			&:nth-of-type(1) {
				grid-column: span 2;
			}
			&:nth-of-type(2) {
				grid-column: span 2;
			}
			&:nth-of-type(3) {
				grid-column: span 2;
			}
			&:nth-of-type(4) {
				grid-column: span 1;
			}
			&:nth-of-type(5) {
				grid-column: span 1;
			}
			&:nth-of-type(6) {
				grid-column: span 2;
			}

			&.FormControl-id-terms {
				grid-column: span 6;
			}
		}
	}
`;

export const QuickEstimateForm: FC = () => {
	const formState = useForm();

	return (
		<StyledFormGrid
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
						Get a quick{' '}
						<Mark text color="magenta">
							estimate
						</Mark>
						!
					</>
				}
				instructions="Fill out the form below to get your quick estimate, and a step closer to getting your project started!"
			/>
			<FormItemGenerator items={filteredItems} formState={formState} />
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
		</StyledFormGrid>
	);
};
