import { ArrowCircleLeft, ArrowCircleRight, Cancel } from "@mui/icons-material";
import {
	css,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	styled,
} from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import { Button } from "../Button";
import { CustomerInfoStep } from "./steps/CustomerInfoStep";
import { ReserveTimeSlotStep } from "./steps/ReserveTimeSlotStep";
import { SelectDurationStep } from "./steps/SelectDurationStep";
import { SelectServiceStep } from "./steps/SelectServiceStep";

type BookingServiceProps = {
	open?: boolean;
	onCloseClick?: (event: MouseEvent<unknown>) => void;
	activeStep?: number;
};

const steps = [
	{
		completed: false,
		label: "Select a service",
		StepContent: SelectServiceStep,
	},
	{
		completed: false,
		label: "Select Time",
		StepContent: SelectDurationStep,
	},
	{
		completed: false,
		label: "Select Date and time",
		StepContent: ReserveTimeSlotStep,
	},
	{
		completed: false,
		label: "Enter your details",
		StepContent: CustomerInfoStep,
	},
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

export const BookingService: FC<BookingServiceProps> = ({ open = false, onCloseClick }) => {
	const [activeStep, setActiveStep] = useState<number>(0);

	const handleStepClick = (stepIndex: number) => {
		setActiveStep(stepIndex);
	};

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

	const ResolvedStepContent = steps[activeStep].StepContent;

	return (
		<Dialog open={true} fullWidth onClose={onCloseClick}>
			<DialogTitle>{"Book an Appointment"}</DialogTitle>
			<StyledDialogContent>
				<div className="stepper">
					<Stepper nonLinear orientation="vertical" activeStep={activeStep}>
						{steps.map(({ label }, stepIndex) => (
							<Step key={stepIndex}>
								<StepLabel>{label}</StepLabel>
								<StepContent>
									<ResolvedStepContent />
									<Button startIcon={<ArrowCircleLeft color="warning" />} onClick={handlePrevStep}>
										Previous
									</Button>
									<Button endIcon={<ArrowCircleRight color="success" />} onClick={handleNextStep}>
										Next
									</Button>
								</StepContent>
							</Step>
						))}
					</Stepper>
				</div>
			</StyledDialogContent>
			<DialogActions>
				<Button color="text" endIcon={<Cancel color="error" />} onClick={onCloseClick}>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
	);
};
