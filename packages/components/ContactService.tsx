import {Cancel, CheckCircle, MailTwoTone} from '@mui/icons-material';
import {
	Dialog,
	DialogActions,
	DialogContent,
	Grid,
	styled,
} from '@mui/material';
import {type FC, type MouseEvent} from 'react';
import {Button} from './Button';
import {DialogTitle} from './DialogTitle';
import {TextAreaField} from './TextAreaField';
import {TextField} from './TextField';

type ContactServiceProps = {
	readonly isOpen?: boolean;
	readonly onCloseClick?: (event: MouseEvent<unknown>) => void;
	// activeStep?: number;
};

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

export const ContactService: FC<ContactServiceProps> = ({
	isOpen = false,
	onCloseClick,
}) => (
	<Dialog fullWidth open={isOpen} onClose={onCloseClick}>
		<DialogTitle>
			<span>Contact Us</span>
			<MailTwoTone color='primary'/>
		</DialogTitle>
		<StyledDialogContent>
			<StepContentWrapper>
				<Grid container gap={2}>
					<Grid item xs={12}>
						<TextField label='Email' type='email'/>
					</Grid>
					<Grid item md xs={12}>
						<TextField label='First Name' type='text'/>
					</Grid>
					<Grid item md xs={12}>
						<TextField label='Last Name' type='text'/>
					</Grid>
					<Grid item xs={12}>
						<TextAreaField rows={10} label='Message'/>
					</Grid>
				</Grid>
			</StepContentWrapper>
		</StyledDialogContent>
		<DialogActions>
			<Button
				color='text'
				endIcon={<Cancel color='error'/>}
				onClick={onCloseClick}
			>
				Cancel
			</Button>
			<Button color='tertiary' endIcon={<CheckCircle color='success'/>}>
				Submit
			</Button>
		</DialogActions>
	</Dialog>
);
