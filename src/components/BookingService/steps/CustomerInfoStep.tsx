import { Heading } from "@components/Heading";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC } from "react";

export const CustomerInfoStep: FC<unknown> = () => {
	return (
		<Grid container gap={1}>
			<Grid item xs={12} md>
				<TextField fullWidth label="Country" />
			</Grid>
			<Grid item xs={12} md>
				<TextField fullWidth label="Phone" type="tel" />
			</Grid>
			<Grid item xs={12}>
				<TextField fullWidth label="Email" type="email" />
			</Grid>
			<Grid item xs={12} md>
				<TextField fullWidth label="First Name" />
			</Grid>
			<Grid item xs={12} md>
				<TextField fullWidth label="Last Name" />
			</Grid>
			<Grid item xs={12}>
				<TextField fullWidth label="Notes" multiline rows={5} />
			</Grid>
		</Grid>
	);
};
