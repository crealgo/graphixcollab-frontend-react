import { ServiceInformation } from "@components/BookingService/steps/data";
import { Heading } from "@components/Heading";
import { Text } from "@components/Text";
import { css, styled } from "@mui/material";
import { colorIterator } from "@utils/colorIterator";
import { ComponentPropsWithoutRef, FC } from "react";

export interface RadioCardProps extends ServiceInformation, ComponentPropsWithoutRef<"input"> {}

const BaseElement: FC<RadioCardProps> = ({
	label,
	description,
	icon: Icon,
	meta,
	checked,
	className,
	name,
	...props
}) => (
	<div
		{...props}
		role="radio"
		aria-checked={checked ? "true" : "false"}
		tabIndex={0}
		aria-labelledby={name}
		className={className}
	>
		{Icon ? (
			<div role="presentation" className="iconBox">
				<Icon className={"icon"} />
			</div>
		) : null}
		<div className="content">
			<Heading id={name} className="label" level={5}>
				{label}
			</Heading>
			<small className="meta">{description}</small>
		</div>
	</div>
);

export const RadioCard = styled(BaseElement)<RadioCardProps>(
	({ theme }) => css`
		cursor: pointer;
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 0.75rem;

		border-style: solid;
		border-width: 1px;
		border-color: ${theme.palette.grey[400]};
		border-radius: 0.25rem;

		.iconBox {
			aspect-ratio: 1;
			padding: 1rem;

			display: flex;
			align-items: center;
			justify-content: center;
			background-color: ${theme.palette.grey[300]};

			.icon {
				transition: all 200ms;
				margin-inline: auto;
				font-size: 3rem;
				display: block;
				color: ${theme.palette.grey[500]};
			}
		}

		.content {
			padding: 1rem;
		}

		opacity: 1;

		&:not([aria-checked="true"]){
			&:hover {
				${colorIterator("color", ".iconBox .icon")};

				.iconBox .icon {
					transform: translateY(-10px);
				}
			}
		}

		&[aria-checked="true"] {
			${colorIterator("background-color", ".iconBox", 0.25)};
			${colorIterator("color", ".iconBox .icon")};
		}
	`
);
