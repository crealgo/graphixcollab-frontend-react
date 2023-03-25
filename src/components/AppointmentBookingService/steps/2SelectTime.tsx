import { BrushTwoTone, EmojiPeopleTwoTone, GradeTwoTone, PaletteTwoTone, PianoTwoTone, SchoolRounded, SchoolTwoTone } from "@mui/icons-material";
import { alpha, css, styled, Typography } from "@mui/material";
import { colorIterator } from "@utils/colorIterator";
import { ComponentPropsWithoutRef, FC, useState } from "react";
import { Text } from "@components/Text";
import { Heading } from "@components/Heading";

const options = [
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
		<Text className='description' variant="caption">{description}</Text>
		{/* {meta?.toString()} */}
	</label>
);

const ServiceOptions = styled('fieldset')<ServiceOptionProps>(({ theme }) => css`
	border: unset;
	padding: unset;
	width: 100%;

	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
	justify-content: center;

	${theme.breakpoints.up('md')} {
		grid-template-columns: repeat(3, 1fr);
	}
`)

const ServiceOption = styled(CustomRadioButton)<ServiceOptionProps>(({ theme, label, checked }) => {
	const resolvedTime = (() => {
		if (label?.includes('15')) {
			return 15;
		}

		if (label?.includes('60')) {
			return 60;
		}

		return 30
	})();

	const resolvedCoverage = {
		15: `
			top: 0;
			left: 50%;
			height: 50%;
			width: 100%;
		`,
		30: `
			top: 0;
			left: 50%;
			height: 100%;
			width: 100%;
		`,
		60: `
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
		`,
	}[resolvedTime]

	return css`
		aspect-ratio: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		gap: 0.75rem;
		overflow: hidden;
		z-index: 0;

		border-style: dotted;
		border-width: 3px;
		border-color: ${theme.palette.grey[500]};
		border-radius: 999999px;
		padding: 1rem;
		cursor: pointer;
		text-align: center;
		position: relative;

		&:before {
			content: '';
			opacity: 0.5;
			z-index: -1;
			display: block;
			position: absolute;
			${resolvedCoverage}
			background-color: ${alpha(theme.palette.primary.light, 0.25)};
		}

		.icon {
			& > * {
				transition: all 300ms;
				margin-inline: auto;
				font-size: 3rem;
				display: block;
				color:  ${theme.palette.grey[500]};
			}
		}

		.description {
			margin-top: -0.75rem;
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
	`
})

export const SelectTime: FC<unknown> = () => {
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
