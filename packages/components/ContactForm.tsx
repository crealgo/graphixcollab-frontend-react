import {styled} from '@mui/material/styles';
import {CheckCircleOutline, Refresh} from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import {type FC, type PropsWithChildren} from 'react';
import {ActionStack} from './ActionStack';
import {Button} from './Button';
import {Mark} from './Mark';
import {useForm} from '@graphixcollab/components/useForm';
import {FormGrid} from './FormGrid';
import {FormHeader} from './FormHeader';
import {FormItemGenerator} from './FormItemGenerator';
import {renderFormAlert} from '@graphixcollab/utils/renderFormAlert';
import {contactFormItems as items} from './__data__/contactFormItems';
import {getFormAction} from '@graphixcollab/utils/getFormAction';
import {css} from '@emotion/react';

const StyledFormGrid = styled(FormGrid)(({theme}) => css`
	${theme.breakpoints.up('md')} {
		padding-right: 20rem;

		.FormControl-id-name,
		.FormControl-id-email {
			grid-column: span 6;
		}
	}
`);

export const ContactForm: FC<PropsWithChildren> = () => {
	const formState = useForm();

	return (
		<StyledFormGrid
			noValidate
			method='post'
			action={getFormAction('send-message/contact')}
			name='contact-form'
			onSubmit={formState.handleSubmit}
		>
			<FormHeader
				title={
					<>
						Send us a{' '}
						<Mark text color='magenta'>
							message
						</Mark>
						!
					</>
				}
				instructions="Fill out the form below to send us a message, and we'll get back to you as soon as possible!"
			/>
			{/* TODO: combine first and last name into 'full name' */}
			<FormItemGenerator items={items} formState={formState}/>
			{formState.isSubmitted && renderFormAlert(formState.isSuccessful)}
			<ActionStack>
				<Button
					size='large'
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
					{formState.isSubmitting ? 'Sending...' : 'Send Message'}
				</Button>
				<Button
					size='large'
					color='tertiary'
					endIcon={<Refresh/>}
					type='button'
					onClick={formState.handleReset}
				>
					Reset
				</Button>
			</ActionStack>
		</StyledFormGrid>
	);
};
