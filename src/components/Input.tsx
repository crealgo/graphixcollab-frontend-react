import { Size } from "@global/generalTypes";
import { css, styled } from "@mui/material/styles";
import { ComponentPropsWithoutRef, FC } from "react";

export interface InputProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
	label?: string;
	helperText?: string;
	size?: Size;
}

const BaseElement: FC<InputProps> = ({ label, helperText, ...props }) => (
	<div>
		{label && (
			<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
				Email
			</label>
		)}
		<div className="mt-2">
			<input
				type="email"
				name="email"
				id="email"
				className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				placeholder="you@example.com"
				aria-describedby="email-description"
			/>
		</div>
		{helperText && (
			<p className="mt-2 text-sm text-gray-500" id="email-description">
				We'll only use this for spam.
			</p>
		)}
	</div>
);

export const Input = styled(BaseElement)<InputProps>((props) => {
	const size = props.size ?? "medium";

	return css`
		padding: var(--padding-${size}-input);
		height: var(--height-${size}-input);
	`;
});
