import { MailTwoTone, Cancel, CheckCircle } from "@mui/icons-material";
import { Dialog, DialogTitle, Grid, TextField, DialogActions, DialogContent } from "@mui/material";
import { Button } from "../molecules/Button";
import { css, styled } from "@mui/material/styles";
import { StoryObj } from "@storybook/react";
import { FC, useState, MouseEvent } from "react";

type DialogServiceProps = {
	open?: boolean;
	onCloseClick?: (event: MouseEvent<unknown>) => void;
	activeStep?: number;
};

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

const StepContentWrapper = styled("div")`
	padding-block: 1rem;
`;

const SquareBookingService: FC<DialogServiceProps> = (props) => (
	<Dialog open={!!props.open} fullWidth onClose={props.onCloseClick}>
		<DialogTitle>
			<span>{"Contact Us"}</span>
			<MailTwoTone color="primary" />
		</DialogTitle>
		<StyledDialogContent>
			{'Hello'}
		</StyledDialogContent>
		<DialogActions>
			<Button color="text" endIcon={<Cancel color="error" />} onClick={props.onCloseClick}>
				Cancel
			</Button>
			<Button color="tertiary" endIcon={<CheckCircle color="success" />}>
				Submit
			</Button>
		</DialogActions>
	</Dialog>
);

export default {
	component: SquareBookingService,
};

export const Default: StoryObj = {
	render: () => {
		const [open, setOpen] = useState(false);

		const handleClick = (): void => {
			setOpen(true);
		};

		const handleClose = () => {
			setOpen(false);
		};

		return (
			<>
				<Button color="primary" onClick={handleClick}>
					{"Open Booking Service"}
				</Button>
				<SquareBookingService open={open} onCloseClick={handleClose} />
			</>
		);
	},
};
