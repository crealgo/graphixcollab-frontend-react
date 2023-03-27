import { BookingOption } from "../BookingOption";
import { FC, useState } from "react";
import { BookingOptionGroup } from "../BookingOptionGroup";
import { serviceOptions } from "./data";

export const SelectServiceStep: FC<unknown> = () => {
	const [chosen, setChosen] = useState(0);

	return (
		<>
			<BookingOptionGroup>
				{serviceOptions.map((o, oIndex) => (
					<BookingOption
						checked={chosen === oIndex}
						value={oIndex}
						onClick={() => {
							setChosen(oIndex);
						}}
						key={oIndex}
						label={o.label}
						icon={o.icon}
						description={o.description}
					/>
				))}
			</BookingOptionGroup>
		</>
	);
};
