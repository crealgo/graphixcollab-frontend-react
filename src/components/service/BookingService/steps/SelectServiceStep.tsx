import {BookingOption} from '../BookingOption';
import {type FC, useState} from 'react';
import {BookingOptionGroup} from '../BookingOptionGroup';
import {serviceOptions} from './data';

export const SelectServiceStep: FC<unknown> = () => {
	const [chosen, setChosen] = useState(0);

	return (
		<BookingOptionGroup>
			{serviceOptions.map((o, oIndex) => (
				<BookingOption
					key={oIndex}
					checked={chosen === oIndex}
					value={oIndex}
					label={o.label}
					icon={o.icon}
					description={o.description}
					onClick={() => {
						setChosen(oIndex);
					}}
				/>
			))}
		</BookingOptionGroup>
	);
};
