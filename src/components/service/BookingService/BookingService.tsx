import { ActionStack } from '../../base/ActionStack';
import { DialogTitle } from '../../base/DialogTitle';
import {
	ArrowCircleLeft,
	ArrowCircleRight,
	Cancel,
	CheckCircle,
	BookTwoTone
} from '@mui/icons-material';
import {
	css,
	Dialog,
	DialogActions,
	DialogContent,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	styled
} from '@mui/material';
import { type FC, type MouseEvent, useState } from 'react';
import { Button } from '../../base/Button';
import { CustomerInfoStep } from './steps/CustomerInfoStep';
import { ReserveTimeSlotStep } from './steps/ReserveTimeSlotStep';
import { SelectServiceStep } from './steps/SelectServiceStep';

type BookingServiceProps = {
	isOpen?: boolean;
	onCloseClick?: (event: MouseEvent<unknown>) => void;
	// activeStep?: number;
};

const steps = [
	{
		completed: false,
		label: 'Select a service',
		StepContent: SelectServiceStep
	},
	{
		completed: false,
		label: 'Select Date and time',
		StepContent: ReserveTimeSlotStep
	},
	{
		completed: false,
		label: 'Enter your details',
		StepContent: CustomerInfoStep
	}
];

const StyledDialogContent = styled(DialogContent)(
	({ theme }) => css`
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
	`
);

const StepContentWrapper = styled('div')`
	padding-block: 1rem;
`;

export const BookingService: FC<BookingServiceProps> = ({
	isOpen = false,
	onCloseClick
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
				<BookTwoTone color="primary" />
			</DialogTitle>
			<StyledDialogContent>
				<div className="stepper">
					<Stepper
						nonLinear
						orientation="vertical"
						activeStep={activeStep}
					>
						{steps.map(
							(
								{ label, StepContent: ResolvedStepContent },
								stepIndex
							) => (
								<Step key={stepIndex}>
									<StepLabel>{label}</StepLabel>
									<StepContent>
										<StepContentWrapper>
											<ResolvedStepContent />
											<br />
											<ActionStack>
												<Button
													color="text"
													startIcon={
														<ArrowCircleLeft color="warning" />
													}
													onClick={handlePrevStep}
												>
													Previous
												</Button>
												{stepIndex ===
												steps.length - 1 ? (
													<Button
														color="tertiary"
														endIcon={
															<CheckCircle color="success" />
														}
														onClick={handleNextStep}
													>
														Submit
													</Button>
												) : (
													<Button
														color="text"
														endIcon={
															<ArrowCircleRight color="success" />
														}
														onClick={handleNextStep}
													>
														Next
													</Button>
												)}
											</ActionStack>
										</StepContentWrapper>
									</StepContent>
								</Step>
							)
						)}
					</Stepper>
				</div>
			</StyledDialogContent>
			<DialogActions>
				<Button
					color="text"
					endIcon={<Cancel color="error" />}
					onClick={onCloseClick}
				>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
	);
};
