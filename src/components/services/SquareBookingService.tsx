import { MailTwoTone, Cancel, CheckCircle } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogActions, DialogContent } from "@mui/material";
import { Button } from "../molecules/Button";
import { css, styled } from "@mui/material/styles";
import { FC, MouseEvent } from "react";

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

export const SquareBookingService: FC<DialogServiceProps> = (props) => (
	<Dialog open={true} fullWidth maxWidth="lg" onClose={props.onCloseClick}>
		<DialogTitle>
			<span>{"Contact Us"}</span>
			<MailTwoTone color="primary" />
		</DialogTitle>
		<StyledDialogContent>
			{/* <!-- Start Square Appointments Embed Code --> */}
			<script src="https://square.site/appointments/buyer/widget/pgkiyyqcz8g07b/LAR1DB5CED0WQ.js"></script>
			{/* <!-- End Square Appointments Embed Code --> */}
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
