import { TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import { TimeSlot } from "../TimeSlot";
import { TimeSlotGroup } from "../TimeSlotGroup";

export const ReserveTimeSlotStep: FC<unknown> = () => {
	return (
		<Grid container gap={3}>
			<Grid item xs={12}>
				<Typography variant="subtitle1">{"Available Days"}</Typography>
				<TextField
					type="date"
					fullWidth
					FormHelperTextProps={{
						sx: {
							marginLeft: 0,
						},
					}}
					helperText="Choose a day to show available times"
				/>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="subtitle1">{"Available Times"}</Typography>
				<TimeSlotGroup>
					<TimeSlot label="9:00 AM" />
					<TimeSlot label="10:00 AM" />
					<TimeSlot label="11:00 AM" />
					<TimeSlot label="12:00 AM" />
					<TimeSlot label="1:00 PM" />
				</TimeSlotGroup>
			</Grid>
		</Grid>
	);
};
