import {
	ArrowCircleLeft,
	ArrowCircleRight,
	BookTwoTone,
	Cancel,
	CheckCircle,
} from '@mui/icons-material';
import {
	Dialog,
	DialogActions,
	DialogContent,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	styled,
} from '@mui/material';
import {useState, type FC, type MouseEvent} from 'react';
import {ActionStack} from '../ActionStack';
import {Button} from '../Button';
import {DialogTitle} from '../DialogTitle';
import {CustomerInfoStep} from './steps/CustomerInfoStep';
import {ReserveTimeSlotStep} from './steps/ReserveTimeSlotStep';
import {SelectServiceStep} from './steps/SelectServiceStep';

type BookingServiceProps = {
	readonly isOpen?: boolean;
	readonly onCloseClick?: (event: MouseEvent<unknown>) => void;
	// ActiveStep?: number;
};

const steps = [
	{
		completed: false,
		label: 'Select a service',
		StepContent: SelectServiceStep,
	},
	{
		completed: false,
		label: 'Select Date and time',
		StepContent: ReserveTimeSlotStep,
	},
	{
		completed: false,
		label: 'Enter your details',
		StepContent: CustomerInfoStep,
	},
];

const StyledDialogContent = styled(DialogContent)`
	background-color: var(--color-brand-key-lightest);
	border-top: solid 1px var(--color-brand-key-lighter);
	border-bottom: solid 1px var(--color-brand-key-lighter);

	.stepper {
		padding-block: 1rem;
	}

	.step-content {
		padding-inline: 0.5rem;
		padding-block: 2rem;
	}
`;

const StepContentWrapper = styled('div')`
	padding-block: 1rem;
`;

export const BookingService: FC<BookingServiceProps> = ({
	isOpen = false,
	onCloseClick,
}) => {
	const [activeStep, setActiveStep] = useState<number>(0);

	const handlePrevStep = () => {
		if (activeStep <= 0) {
			return;
		}

		const newStep = activeStep === 0 ? activeStep : activeStep - 1;
		setActiveStep(newStep);
	};

	const handleNextStep = () => {
		if (activeStep < steps.length - 1) {
			const newStep = activeStep + 1;
			setActiveStep(newStep);
		}
	};

	return (
		<Dialog fullWidth open={isOpen} onClose={onCloseClick}>
			<DialogTitle>
				<span>Book an Appointment</span>
				<BookTwoTone color='primary'/>
			</DialogTitle>
			<StyledDialogContent>
				<div className='stepper'>
					<Stepper
						nonLinear
						orientation='vertical'
						activeStep={activeStep}
					>
						{steps.map(
							(
								{label, StepContent: ResolvedStepContent},
								stepIndex,
							) => (
								<Step key={stepIndex}>
									<StepLabel>{label}</StepLabel>
									<StepContent>
										<StepContentWrapper>
											<ResolvedStepContent/>
											<br/>
											<ActionStack>
												<Button
													color='text'
													startIcon={<ArrowCircleLeft color='warning'/>}
													onClick={handlePrevStep}
												>
													Previous
												</Button>
												{stepIndex === steps.length - 1 ? (
													<Button
														color='tertiary'
														endIcon={<CheckCircle color='success'/>}
														onClick={handleNextStep}
													>
														Submit
													</Button>
												) : (
													<Button
														color='text'
														endIcon={<ArrowCircleRight color='success'/>}
														onClick={handleNextStep}
													>
														Next
													</Button>
												)}
											</ActionStack>
										</StepContentWrapper>
									</StepContent>
								</Step>
							),
						)}
					</Stepper>
				</div>
			</StyledDialogContent>
			<DialogActions>
				<Button
					color='text'
					endIcon={<Cancel color='error'/>}
					onClick={onCloseClick}
				>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
	);
};
