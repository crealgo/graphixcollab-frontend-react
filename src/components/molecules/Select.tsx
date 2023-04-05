import { ComponentPropsWithoutRef, FC } from "react";

export interface SelectProps extends ComponentPropsWithoutRef<"select"> {
	label?: string;
	helperText?: string;
}

export const Select: FC<SelectProps> = ({ label, helperText, ...props }) => (
	<div>
		{label && (
			<label htmlFor="location" className="block mb-2 text-sm font-medium leading-6 text-gray-900">
				Email
			</label>
		)}
		<select
			id="location"
			name="location"
			className="block w-full rounded-md border-0 py-2.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:ring-2 focus:ring-indigo-600"
			defaultValue="T-Shirt Printing"
		>
			<option>T-Shirt Printing</option>
			<option>Logo Design</option>
			<option>Poster Printing</option>
		</select>
		{helperText && (
			<p className="mt-2 text-sm text-gray-500" id="email-description">
				{"We'll only use this for spam."}
			</p>
		)}
	</div>
);
