import {styled} from '@mui/material';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {Phone, type PhoneProps} from './Phone';

export type DualPhoneDisplayProps = {
	phone1Props?: PhoneProps;
	phone2Props?: PhoneProps;
} & ComponentPropsWithoutRef<'div'>;

const Wrapper = styled('div')`
	background-color: transparent;
	z-index: 1;
	position: relative;

	padding-block: 0 !important;

	.Phone-root {
		position: absolute;
		width: 55%;
		border-radius: 2rem;
	}

	.Phone-root:nth-of-type(1) {
		left: 0;
		top: 35%;
	}

	.Phone-root:nth-of-type(2) {
		right: 0;
		top: 15%;
	}
`;

const InnerWrapper = styled('div')`
	position: relative;
	height: 100%;
	width: 100%;
`;

export const DualPhoneDisplay: FC<DualPhoneDisplayProps> = ({
	phone1Props,
	phone2Props,
	...props
}) => (
	<Wrapper
		className='DualPhoneDisplay-root'
		role='img'
		aria-label='Phone app display'
		{...props}
	>
		<InnerWrapper>
			<Phone elevation={10} {...phone1Props}/>
			<Phone hasBorder elevation={20} {...phone2Props}/>
		</InnerWrapper>
	</Wrapper>
);
