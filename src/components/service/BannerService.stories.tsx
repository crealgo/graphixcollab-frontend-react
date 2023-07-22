import {type StoryObj, type Meta} from '@storybook/react';
import {useState} from 'react';
import {generateBanner} from '../../utils/chance';
import {BannerService} from './BannerService';
import {Banner, type BannerProps} from '../base/Banner';
import {Button} from '../base/Button';

export default {
	component: BannerService,
	subcomponents: {Banner},
} as Meta;

export const Default: StoryObj<BannerProps> = {
	render: args => {
		const [open, setOpen] = useState(true);

		const handleOpen = () => {
			setOpen(true);
		};

		const handleClose = () => {
			setOpen(false);
		};

		return (
			<>
				<BannerService open={open}>
					<Banner {...args} onCloseClick={handleClose}/>
				</BannerService>
				<br/>
				<Button onClick={handleOpen}>Open Banner</Button>
			</>
		);
	},
	args: generateBanner(),
};
