import {type Meta, type Story} from '@storybook/react';
import {useState} from 'react';
import {generateBanner} from '@utils/chance';
import {Banner, type BannerProps} from '@components/Banner';
import {Button} from '@components/Button';

export default {
	component: Banner
} as Meta;

export const Default: Story<BannerProps> = (args) => {
	const [open, setOpen] = useState(true);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button onClick={handleOpen}>Open Banner</Button>
			{open && <Banner {...args} onCloseClick={handleClose} />}
		</>
	);
};

Default.args = generateBanner();
