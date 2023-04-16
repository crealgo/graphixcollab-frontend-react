import {MailTwoTone, Cancel, CheckCircle} from '@mui/icons-material';
import {Dialog, DialogTitle, DialogActions, DialogContent, Paper} from '@mui/material';
import {Button} from '../base/Button';
import {css, styled} from '@mui/material/styles';
import {type FC, type MouseEvent} from 'react';
import Script from 'next/script';

type DialogServiceProps = {
	open?: boolean;
	onCloseClick?: (event: MouseEvent<unknown>) => void;
	activeStep?: number;
};

const StyledDialogContent = styled(DialogContent)(
	({theme}) => css`
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
	`,
);

const Modal = styled(Paper)`
	position: absolute;
	z-index: 99999;
`;

export const SquareBookingService: FC<DialogServiceProps> = props => (
	<Modal>
		<DialogTitle>
			<span>Contact Us</span>
			<MailTwoTone color='primary'/>
		</DialogTitle>
		<StyledDialogContent/>
		<DialogActions>
			<Button color='text' endIcon={<Cancel color='error'/>} onClick={props.onCloseClick}>
				Cancel
			</Button>
			<Button color='tertiary' endIcon={<CheckCircle color='success'/>}>
				Submit
			</Button>
		</DialogActions>
	</Modal>
);
