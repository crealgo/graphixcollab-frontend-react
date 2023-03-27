import { RadioCard } from "@components/Radio/RadioCard";
import { RadioCards } from "@components/Radio/RadioCards";
import { RadioOption } from "@components/Radio/RadioOption";
import { PaletteTwoTone, SchoolTwoTone } from "@mui/icons-material";
import { FC, useState } from "react";

const options: RadioOption[] = [
	{
		icon: <SchoolTwoTone />,
		label: "15 min",
		description: "Free"
	},
	{
		icon: <PaletteTwoTone />,
		label: "30 min",
		description: "Free"
	},
];

export const SelectDurationStep: FC<unknown> = () => {
	const [chosen, setChosen] = useState(0)

	return (
		<>
			<RadioCards>
				{options.map((o, oIndex) => (
					<RadioCard
						checked={chosen === oIndex}
						value={oIndex}
						onClick={() => {
							setChosen(oIndex)
						}}
						circular
						meta={[o.description || '']}
						key={oIndex} {...o}
					/>
				))}
			</RadioCards>
		</>
	)
}
