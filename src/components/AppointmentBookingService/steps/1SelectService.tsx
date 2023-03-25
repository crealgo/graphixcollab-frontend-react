import { BrushTwoTone, EmojiPeopleTwoTone, GradeTwoTone, PaletteTwoTone, PianoTwoTone, SchoolRounded, SchoolTwoTone } from "@mui/icons-material";
import { css, styled, Typography } from "@mui/material";
import { colorIterator } from "@utils/colorIterator";
import { ComponentPropsWithoutRef, FC, useState } from "react";
import { Text } from "@components/Text";
import { Heading } from "@components/Heading";

const options = [
	{
		icon: <SchoolTwoTone />,
		label: "Grad Sash Design",
		description: "Design and order a sash with a graphic designer. ----- This is a service to design a custom sash. One appointment per person/custom sash. ----- Before your appointment, please send us a mock of your desired sash. Use Pride Sash Custom Builder > https://www.pridesash.com/builder/ to design your sash, take a screen shot, and then email to us at fashiongreekusc@gmail.com.",
		meta: [
			"Design and order a sash with a graphic designer. ----- This is a service to design a custom sash. One appointment per person/custom sash. ----- Before your appointment, please send us a mock of your desired sash. Use Pride Sash Custom Builder > https://www.pridesash.com/builder/ to design your sash, take a screen shot, and then email to us at fashiongreekusc@gmail.com."
		]
	},
	{
		icon: <PaletteTwoTone />,
		label: "Graphic Design",
		description: "This is a 15 min appointment for graphic designing. $18.00 fee (15 min) is waived if you use our printing/embroidery service.",
		meta: [
			"15min Appointment",
			"in-person [Mon-Sat only]"
		]
	},
	{
		icon: <EmojiPeopleTwoTone />,
		label: "Free Consultation",
		description: "This is a 30 min appointment for graphic designing. $18.00 discount if you use our printing/embroidery service.",
		meta: [
			"This is a 30 min appointment for graphic designing. $18.00 discount if you use our printing/embroidery service."
		]
	},
];

type OptionKeys = Partial<typeof options[0]>;

interface ServiceOptionProps extends OptionKeys, ComponentPropsWithoutRef<'input'> { }

const CustomRadioButton: FC<ServiceOptionProps> = ({ label, description, icon, meta, checked, className, ...props }) => (
	<label title={description} className={className}>
		<span className='icon'>{icon}</span>
		<input
			{...props}
			name='service-option'
			className="input"
			type='radio'
			checked={checked}
		/>
		<Heading level={6}>{label}</Heading>
		{/* {meta?.toString()} */}
	</label>
);

const ServiceOptions = styled('fieldset')<ServiceOptionProps>(({ theme }) => css`
	border: unset;
	padding: unset;
	display: grid;
	width: 100%;

	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;

	${theme.breakpoints.up('md')} {
		grid-template-columns: repeat(3, 1fr);
	}
`)

const ServiceOption = styled(CustomRadioButton)<ServiceOptionProps>(({ theme, checked }) => css`
	aspect-ratio: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	gap: 0.75rem;

	border-style: dotted;
	border-width: 3px;
	border-color: ${theme.palette.grey[500]};
	border-radius: 999999px;
	padding: 1rem;
	cursor: pointer;
	text-align: center;

	.icon {
		& > * {
			transition: all 300ms;
			margin-inline: auto;
			font-size: 3rem;
			display: block;
			color:  ${theme.palette.grey[500]};
		}
	}


	.input {
		display: none;
		visibility: hidden;
	}

	&:hover {
		${colorIterator('color', '.icon *')};

		.icon > * {
			transform: translateY(-10px);
		}
	}

	${checked ? css`
		background-color: ${theme.palette.grey[300]};
		${colorIterator('border-color')};
		${colorIterator('color', '.icon *')};

		.icon > * {
			color: ${theme.palette.primary.main};
		}
	` : css`

	`}
`)

export const SelectService: FC<unknown> = () => {
	const [chosen, setChosen] = useState(0)

	return (
		<>
			<ServiceOptions>
				{options.map((o, oIndex) => (
					<ServiceOption
						checked={chosen === oIndex}
						value={oIndex}
						onClick={() => {
							setChosen(oIndex)
						}}
						key={oIndex} {...o}
					/>
				))}
			</ServiceOptions>
		</>
	)
}
