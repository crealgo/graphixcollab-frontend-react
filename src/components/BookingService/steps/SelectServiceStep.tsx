import { RadioCard } from "@components/Radio/RadioCard";
import { FC, useState } from "react";
import { RadioCards } from "../../Radio/RadioCards";
import { serviceOptions } from "./data";

export const SelectServiceStep: FC<unknown> = () => {
	const [chosen, setChosen] = useState(0)

	return (
		<>
			<RadioCards>
				{serviceOptions.map((o, oIndex) => (
					<RadioCard
						checked={chosen === oIndex}
						value={oIndex}
						onClick={() => {
							setChosen(oIndex)
						}}
						key={oIndex}
						label={o.label}
						icon={o.icon}
						description={o.description}
					/>
				))}
			</RadioCards>
		</>
	)
}
