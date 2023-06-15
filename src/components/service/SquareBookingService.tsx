import { Cancel, CheckCircle, MailTwoTone } from '@mui/icons-material';
import {
	DialogActions,
	DialogContent,
	DialogTitle,
	Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { type FC, type MouseEvent } from 'react';
import { Button } from '../base/Button';

type DialogServiceProps = {
	// FIXME: open?: boolean;
	onCloseClick?: (event: MouseEvent<unknown>) => void;
	// FIXME: activeStep?: number;
};

const StyledDialogContent = styled(DialogContent)`
	background-color: var(--color-gray-100);
	border-top: solid 1px var(--color-gray-300);
	border-bottom: solid 1px var(--color-gray-300);

	.stepper {
		padding-block: 1rem;
	}

	.step-content {
		padding-inline: 0.5rem;
		padding-block: 2rem;
	}
`;

const Modal = styled(Paper)`
	position: absolute;
	z-index: 99999;
`;

export const SquareBookingService: FC<DialogServiceProps> = props => (
	<Modal>
		<DialogTitle>
			<span>Contact Us</span>
			<MailTwoTone color="primary" />
		</DialogTitle>
		<StyledDialogContent />
		<DialogActions>
			<Button
				color="text"
				endIcon={<Cancel color="error" />}
				onClick={props.onCloseClick}
			>
				Cancel
			</Button>
			<Button color="tertiary" endIcon={<CheckCircle color="success" />}>
				Submit
			</Button>
		</DialogActions>
	</Modal>
);
