import { ArrowCircleLeft, ArrowCircleRight, Cancel } from '@mui/icons-material';
import { css, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Step, StepButton, StepLabel, Stepper, styled, TextField, useControlled } from '@mui/material';
import { FC, useState } from 'react';
import { Button } from '../Button';
import { SelectService } from './steps/1SelectService';
import { SelectTime } from './steps/2SelectTime';
import { SelectDate } from './steps/3SelectDate';
import { GiveInfo } from './steps/4GiveInfo';

type ABSProps = {
	open?: boolean;
	activeStep?: number;
}

const steps = [
	{
		label: 'Select a service',
		StepContent: SelectService
	},
	{
		label: 'Select Time',
		StepContent: SelectTime
	},
	{
		label: 'Select Date and time',
		StepContent: SelectDate
	},
	{
		label: 'Enter your details',
		StepContent: GiveInfo
	}
]

const StyledDialogContent = styled(DialogContent)(({ theme }) => css`
	background-color: ${theme.palette.grey[100]};
	border-top: solid 1px ${theme.palette.grey[300]};
	border-bottom: solid 1px ${theme.palette.grey[300]};

	.stepper {
		padding-block: 1rem;
	}

	.step-content {
		padding-inline: 0.5rem;
		padding-block: 2rem;
	}
`)

export const AppointmentBookingService: FC<ABSProps> = ({
	open: controlledOpen = false, activeStep: controlledActiveStep
}) => {
	const [open, setOpen] = useControlled({
		name: 'AppointmentBookingService',
		default: false,
		controlled: controlledOpen
	});

	const [activeStep, setActiveStep] = useState<number>(0);

	const handleClose = () => {
		setOpen(false)
	}

	const handleStepClick = (stepIndex: number) => {
		setActiveStep(stepIndex)
	}

	const handlePrevStep = () => {
		if (activeStep <= 0) {
			return;
		}

		const newStep = activeStep === 0 ? activeStep : activeStep - 1
		setActiveStep(newStep)
	}

	const handleNextStep = () => {
		if (activeStep < steps.length - 1) {
			const newStep = activeStep + 1
			setActiveStep(newStep)
		}
	}

	const ResolvedStepContent = steps[activeStep].StepContent

	return (
		<Dialog open={open} fullWidth maxWidth='md' onClose={handleClose}>
			<DialogTitle>
				{'Book an Appointment'}
			</DialogTitle>
			<DialogContentText></DialogContentText>
			<StyledDialogContent>
				<div className='stepper'>
					<Stepper nonLinear activeStep={activeStep}>
						{steps.map(({ label }, stepIndex) => (
							<Step key={stepIndex}>
								<StepButton
									onClick={() => {
										handleStepClick(stepIndex)
									}}
								>
									<StepLabel>{label}</StepLabel>
								</StepButton>
							</Step>
						))}
					</Stepper>
				</div>
				<div className='step-content'>
					<ResolvedStepContent />
				</div>
			</StyledDialogContent>
			<DialogActions>
				<Button color='text' endIcon={<Cancel color='error' />} onClick={handleClose}>Cancel</Button>
				<Button startIcon={<ArrowCircleLeft color='warning' />} onClick={handlePrevStep}>Previous</Button>
				<Button endIcon={<ArrowCircleRight color='success' />} onClick={handleNextStep}>Next</Button>
			</DialogActions>
		</Dialog>
	);
};
