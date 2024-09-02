import {type StoryObj} from '@storybook/react';
import {useState} from 'react';
import {Button} from './Button';
import {SquareBookingService} from './SquareBookingService';

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
				<Button color='primary' onClick={handleClick}>
					Open Booking Service
				</Button>
				{`It is ${open ? 'open' : 'closed'}`}
				<SquareBookingService onCloseClick={handleClose}/>
			</>
		);
	},
};
