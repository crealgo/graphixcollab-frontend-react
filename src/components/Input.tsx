import { ComponentPropsWithoutRef, FC } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
	label?: string;
	helperText?: string;
}

export const Input: FC<InputProps> = ({ label, helperText, ...props }) => (
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
