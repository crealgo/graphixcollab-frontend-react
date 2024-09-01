import {ArrowForward, CheckCircleOutline} from '@mui/icons-material';
import {CircularProgress} from '@mui/material';
import {type FC} from 'react';
import {ActionStack} from '../components/base/ActionStack';
import {Button} from '../components/base/Button';
import {Mark} from '../components/base/Mark';
import {useForm} from '../hooks/useForm';
import {FormGrid} from './FormGrid';
import {FormHeader} from './FormHeader';
import {FormItemGenerator} from './FormItemGenerator';
import {renderFormAlert} from '../../utils/renderFormAlert';
import {estimateFormItems} from './__data__/estimateFormItems';
import styled from '@emotion/styled';
import {getFormAction} from '../../utils/getFormAction';

const filteredItems = estimateFormItems.filter(
	item => item.itemType !== 'title',
);

const StyledFormGrid = styled(FormGrid)`
	@media screen and (min-width: 768px) {
		.FormControl-id-name,
		.FormControl-id-email {
			grid-column: span 6;
		}

		.FormControl-id-service,
		.FormControl-id-deadline,
		.FormControl-id-delivery {
			grid-column: span 3;
		}

		.FormControl-id-material {
			grid-column: span 2;
		}

		.FormControl-id-quantity {
			grid-column: span 1;
		}

		.FormControl-id-artwork,
		.FormControl-id-terms {
			grid-column: span 12;
		}
	}
`;

export const QuickEstimateForm: FC = () => {
	const formState = useForm();

	return (
		<StyledFormGrid
			noValidate
			method='post'
			action={getFormAction('send-message/estimate-request')}
			encType='multipart/form-data'
			id='estimator-form'
			onReset={formState.handleReset}
			onSubmit={formState.handleSubmit}
		>
			<FormHeader
				title={
					<>
						Get a quick{' '}
						<Mark text color='magenta'>
							estimate
						</Mark>
						!
					</>
				}
				instructions='Fill out the form below to get your quick estimate, and a step closer to getting your project started!'
			/>
			<FormItemGenerator items={filteredItems} formState={formState}/>
			{formState.isSubmitted && renderFormAlert(formState.isSuccessful)}
			<ActionStack>
				<Button
					color='secondary'
					endIcon={formState.isSubmitting ? (
						<CircularProgress
							size='inherit'
							thickness={6}
							sx={{color: 'white'}}
						/>
					) : (
						<CheckCircleOutline/>
					)}
					type='submit'
				>
					{formState.isSubmitting ? 'Sending...' : 'Get Estimate'}
				</Button>
				<Button
					color='text'
					href='mailto:graphixcollab@gmail.com'
					endIcon={<ArrowForward/>}
				>
					Not sure? Contact us
				</Button>
			</ActionStack>
		</StyledFormGrid>
	);
};
