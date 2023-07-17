import styled from '@emotion/styled';
import MuiAlert, { type AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Alert = styled(MuiAlert)`
	font-family: var(--font-family) !important;
	margin-block-start: var(--spacing-2);
	grid-column: span 2;
`;
export const renderFormAlert = (isSuccessful: boolean) => {
	let severity: AlertProps['severity'] = 'error';
	let title = 'Request Failed';
	let message = 'There was an error sending your message. Please try again.';

	if (isSuccessful) {
		severity = 'success';
		title = 'Message Sent';
		message =
			'Your message has been sent. We will get back to you as soon as possible.';
	}

	return (
		<div className="FormSection-alert">
			<Alert severity={severity}>
				<AlertTitle>{title}</AlertTitle>
				{message}
			</Alert>
		</div>
	);
};
