import { Cancel, CheckCircle, MailTwoTone } from "@mui/icons-material";
import { css, Dialog, DialogActions, DialogContent, Grid, styled, TextField } from "@mui/material";
import { FC, MouseEvent } from "react";
import { Button } from "./Button";
import { DialogTitle } from "./DialogTitle";

type ContactServiceProps = {
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

export const ContactService: FC<ContactServiceProps> = ({ open = false, onCloseClick }) => {
	return (
		<Dialog open={open} fullWidth onClose={onCloseClick}>
			<DialogTitle>
				<span>{"Contact Us"}</span>
				<MailTwoTone color="primary" />
			</DialogTitle>
			<StyledDialogContent>
				<StepContentWrapper>
					<Grid container gap={1}>
						<Grid item xs={12}>
							<TextField fullWidth label="Email" type="email" />
						</Grid>
						<Grid item xs={12} md>
							<TextField fullWidth label="First Name" type="text" />
						</Grid>
						<Grid item xs={12} md>
							<TextField fullWidth label="Last Name" type="text" />
						</Grid>
						<Grid item xs={12}>
							<TextField fullWidth label="Message" multiline rows={5} />
						</Grid>
					</Grid>
				</StepContentWrapper>
			</StyledDialogContent>
			<DialogActions>
				<Button color="text" endIcon={<Cancel color="error" />} onClick={onCloseClick}>
					Cancel
				</Button>
				<Button color="tertiary" endIcon={<CheckCircle color="success" />}>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};
