import {ArrowForward, CheckCircleOutline} from '@mui/icons-material';
import {CircularProgress, css, styled} from '@mui/material';
import {type FC} from 'react';
import {ActionStack} from './ActionStack';
import {Button} from './Button';
import {Mark} from './Mark';
import {useForm} from './useForm';
import {FormGrid} from './FormGrid';
import {FormHeader} from './FormHeader';
import {FormItemGenerator} from './FormItemGenerator';
import {renderFormAlert} from '@graphixcollab/utils/renderFormAlert';
import {estimateFormItems} from '@graphixcollab/components/__data__/estimateFormItems';
import {getFormAction} from '@graphixcollab/utils/getFormAction';

const StyledFormGrid = styled(FormGrid)(({theme}) => css`
	${theme.breakpoints.up('md')} {
		padding-right: 20rem;

		.FormControl-id-name,
		.FormControl-id-email {
			grid-column: span 6;
		}

		.FormControl-id-service,
		.FormControl-id-material,
		.FormControl-id-quantity,
		.FormControl-id-deadline,
		.FormControl-id-delivery {
			grid-column: span 4;
		}

		.FormControl-id-artwork {
			grid-column: span 12;
		}
	}
`);

export const EstimateForm: FC = () => {
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
						Get an{' '}
						<Mark text color='magenta'>
							estimate
						</Mark>
						!
					</>
				}
				instructions='Fill out the form below to get your quick estimate, and a step closer to getting your project started!'
			/>
			<FormItemGenerator
				items={estimateFormItems}
				formState={formState}
			/>
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
