import {TextField} from '@mui/material';
import Grid from '@mui/material/Grid';
import {type FC} from 'react';

export const CustomerInfoStep: FC<unknown> = () => (
	<Grid container gap={1}>
		<Grid item md xs={12}>
			<TextField fullWidth label='Country'/>
		</Grid>
		<Grid item md xs={12}>
			<TextField fullWidth label='Phone' type='tel'/>
		</Grid>
		<Grid item xs={12}>
			<TextField fullWidth label='Email' type='email'/>
		</Grid>
		<Grid item md xs={12}>
			<TextField fullWidth label='First Name'/>
		</Grid>
		<Grid item md xs={12}>
			<TextField fullWidth label='Last Name'/>
		</Grid>
		<Grid item xs={12}>
			<TextField fullWidth multiline label='Notes' rows={5}/>
		</Grid>
	</Grid>
);
